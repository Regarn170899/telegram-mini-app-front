import React, {useEffect, useState} from 'react';
import './Auth.css'
const Auth = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const handleAuth = async () => {
        const tg = window?.Telegram?.WebApp;
        const authData = tg.initData; // Данные авторизации
        const queryId = tg?.initDataUnsafe?.query_id; // ID запроса

        // Отправка данных на сервер для проверки
        const response = await fetch('https://16qnuw-77-51-47-174.ru.tuna.am/auth/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ authData, queryId }),
        });

        if (response.ok) {
            tg?.sendData('Auth successful!'); // Отправить данные в бот
        } else {
            alert('Authorization failed.');
        }
    };
    useEffect(() => {
        console.log(tg);


        handleAuth();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Phone:", phone);
        console.log("Password:", password);
        // Здесь можно добавить логику авторизации
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Telegram</h1>
                <p  className="login-subtitle">Please sign in to continue.</p>
                <button onClick={()=>{}}>wetwedfvssdfweaf</button>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="+7 123 456 78 90"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                </form>
                <p className="login-footer">
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Auth;