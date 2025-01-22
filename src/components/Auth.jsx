import React, {useEffect} from 'react';
import './Auth.css'
import {useLocation} from "react-router-dom";
const Auth = () => {
    const location = useLocation();

    useEffect(() => {
        // Получаем данные из query-параметров
        const queryParams = new URLSearchParams(location.search);
        const userData = {
            id: queryParams.get('id'),
            first_name: queryParams.get('first_name'),
            last_name: queryParams.get('last_name'),
            username: queryParams.get('username'),
            photo_url: queryParams.get('photo_url'),
            auth_date: queryParams.get('auth_date'),
            hash: queryParams.get('hash'),
        };

        // Обработка данных (например, сохранение в localStorage или отправка на сервер)
        console.log('User data:', userData);

        // Перенаправляем пользователя обратно в бот
        window.location.href = 'https://t.me/testAuthMiniApp_bot';
    }, [location]);

    return <div>Processing authorization...</div>;
};

export default Auth;