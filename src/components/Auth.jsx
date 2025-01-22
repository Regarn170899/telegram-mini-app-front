import React from 'react';
import './Auth.css'
const Auth = () => {
    const handleSendData = () => {
        const tg = window.Telegram.WebApp;

        // Данные, которые вы хотите отправить
        const userData = {
            userId: tg.initDataUnsafe.user?.id,
            firstName: tg.initDataUnsafe.user?.first_name,
            lastName: tg.initDataUnsafe.user?.last_name,
            username: tg.initDataUnsafe.user?.username,
        };

        // Отправка данных в бот
        tg.sendData(JSON.stringify(userData));

        // Закрыть Mini App (опционально)
        tg.close();
    };

    return (
        <div>
            <h1>Welcome to Mini App!</h1>
            <button onClick={()=>handleSendData()}>Send User Data to Backend</button>
        </div>
    );
};

export default Auth;