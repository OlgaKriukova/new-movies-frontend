// import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import "./Header.css";
import logo from '../../images/logo.png'

function Header() {
    return(
        <header className="header">
            <a href="index.html" className="header__logo">
                <img src={logo} alt="смайл" className="header__img" />
            </a>
            {/* <button className="header__button-registy">
                <a href="#" className="header__link-registry">
                Регистрация
                </a>
            </button>
            <button className="header__button-enter">
                <a href="#" className="header__link-enter">
                Войти
                </a>
            </button> */}
            <Navigation />
        </header>
    );
}

export default Header;