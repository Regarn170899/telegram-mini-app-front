import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MainPage from "./components/mainPage.jsx";
import Auth from "./components/Auth.jsx";

function App() {
    return(
        <BrowserRouter>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Router>
        </BrowserRouter>
    )
}


export default App;
