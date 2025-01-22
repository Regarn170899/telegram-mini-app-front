import React from "react";
import { HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/mainPage.jsx";
import Auth from "./components/Auth.jsx";

function App() {
    return(
        <HashRouter >
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
        </HashRouter >
    )
}


export default App;
