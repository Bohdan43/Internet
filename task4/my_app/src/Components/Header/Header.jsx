import React, {useState} from "react";
import {Routes, Link} from "react-router-dom";
import logo  from "./logo2.png"
import "./Header.scss"
//хук (скритий ф-ціонал кнопи)
const Header = () => {
    const [showMenu, setShowMenu] = useState (false);
    const [title, setTitel] = useState ("Is logged");
    const nandleMenuToggle = () => {
        setShowMenu (!showMenu);
    }
//хук (скритий ф-ціонал кнопи)

// хук (для login)
// const clickMe = (login) => {
//     console.log ('Cliked' + login)
// }
// хук (для login)

const changeTitel = () => {
    setTitel("Relogin");
}
return (
    <div>
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt = "logo" className="logo" />
                </div>


                    <nav className= {showMenu ? "nav nav-show" : "nav "}>
                        <ul className="nav-list">
                            <li className="nav-item"><Link to="/">Home</Link></li>
                            <li className="nav-item">Shop</li>
                            <li className="nav-item"><Link to="/about">About</Link></li>
                            <li className="nav-item">Contact</li>
                        </ul>
                    </nav>


                    <div className="login-container">
                        <button className="login-button" onClick={ () => changeTitel ()}>Login</button>
                    </div>
                        <div className="burger-container" onClick={nandleMenuToggle}>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                </div>
            </div>
        </header>
        <h3>{title}</h3>
    </div>
)
}

export default Header;
