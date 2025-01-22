import React, {useState} from 'react';
import './Auth.css'
const Auth = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

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
                <p className="login-subtitle">Please sign in to continue.</p>
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