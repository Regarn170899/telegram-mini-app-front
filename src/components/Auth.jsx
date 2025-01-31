import React, {useEffect, useState} from 'react';
import './Auth.css'
const Auth = () => {
    const handleAuth = async () => {
        const tg = window?.Telegram?.WebApp;
        let authData
        let queryId

        let userData = {};
        if (tg) {
             authData = tg.initData; // Данные а
             queryId = tg?.initDataUnsafe; // ID запроса

            const params = new URLSearchParams(authData);

            for (const [key, value] of params.entries()) {
                userData[key] = value;
            }
        }
        const response = await fetch('https://8mu0y6-95-72-138-197.ru.tuna.am/auth/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userData, queryId }),
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