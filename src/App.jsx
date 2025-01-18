import React, { useState, useEffect } from "react";

function App() {
    const [user, setUser] = useState(null); // Данные пользователя Telegram
    const [formData, setFormData] = useState({ name: "", message: "" }); // Данные формы
    const [status, setStatus] = useState(""); // Статус отправки данных

    const tg = window?.Telegram?.WebApp;

    // Инициализация Telegram Web App и получение данных пользователя
    useEffect(() => {
        tg?.expand(); // Разворачиваем Web App
        setUser(tg?.initDataUnsafe?.user || null); // Получаем информацию о пользователе
    }, []);

    // Обработчик изменения полей формы
    const handleInputChange = (e) => {
        const { name, value } = e?.target;
        setFormData({ ...formData, [name]: value });
    };

    // Обработчик отправки формы
    const handleSubmit = async () => {
        setStatus("Отправка данных...");

        try {
            const response = await fetch("http://localhost:5000/test/log", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData?.name || user?.first_name || "Аноним",
                    message: formData?.message,
                    userId: user?.id,
                }),
            });

            if (response.ok) {
                setStatus("Данные успешно отправлены!");
            } else {
                setStatus("Ошибка при отправке данных.");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            setStatus("Ошибка при отправке данных.");
        }
    };


    return (
        <div style={styles.container}>
            <button onClick={()=>handleSubmit()} style={styles.button}>
                Отправить
            </button>
            <h1>Отправить сообщение</h1>
                <p>{JSON.stringify(tg)}</p>

            {user && (
                <p>
                    Привет, <strong>{user.first_name}</strong>! ID пользователя: {user.id}
                </p>
            )}

            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.field}>
                    <label htmlFor="name">Ваше имя:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Введите имя"
                        style={styles.input}
                    />
                </div>

                <div style={styles.field}>
                    <label htmlFor="message">Сообщение:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Введите сообщение"
                        style={styles.textarea}
                    />
                </div>

            </form>

            {status && <p style={styles.status}>{status}</p>}
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    field: {
        marginBottom: "15px",
        textAlign: "left",
        width: "100%",
        maxWidth: "400px",
    },
    input: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        marginTop: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    textarea: {
        width: "100%",
        height: "100px",
        padding: "10px",
        fontSize: "16px",
        marginTop: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    status: {
        marginTop: "20px",
        fontSize: "14px",
        color: "#333",
    },
};

export default App;
