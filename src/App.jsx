import React, { useEffect, useState } from 'react';

function App() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (window?.Telegram?.WebApp?.initDataUnsafe) {
            const { user } = window?.Telegram?.WebApp?.initDataUnsafe;
            setUserData(user);
        }
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Добро пожаловать!</h1>
            {userData ? (
                <p>Привет, {userData.first_name} {userData.last_name}!</p>
            ) : (
                <p>Загружаем данные пользователя...</p>
            )}
        </div>
    );
}

export default App;
