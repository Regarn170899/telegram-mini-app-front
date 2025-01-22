import React, {useEffect, useState} from 'react';
import './Auth.css'
const Auth = () => {
    const handleAuth = async () => {
        const tg = window?.Telegram?.WebApp;
        let authData
        let queryId
        if (tg) {
             authData = tg.initData; // Данные авторизации
             queryId = tg?.initDataUnsafe?.query_id; // ID запроса
        }


        // Отправка данных на сервер для проверки
        const response = await fetch('https://16qnuw-77-51-47-174.ru.tuna.am/auth/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ authData, queryId }),
        });
            alert(JSON.stringify(response))

    };

    const handleSendData = () => {
        const tg = window.Telegram.WebApp;

        if (tg) {
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
        } else {
            console.error('Telegram WebApp is not available');
        }
    };

    return (
        <div>
            <h1>Welcome to Mini App!</h1>
            <button onClick={()=>{handleSendData();
                handleAuth().then(r => alert(r))}}>Send User Data to Backend</button>
        </div>
    );

};

export default Auth;