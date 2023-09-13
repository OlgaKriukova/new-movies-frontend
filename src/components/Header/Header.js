import { Link } from "react-router-dom";

import "./Header.css";
import logo from '../../images/logo.png'

function Header(props) {
    return(
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="смайл" className="header__img" />
            </Link>
            <button className="header__button-registy">
                <Link to="/signup" className="header__link-registry">
                Регистрация
                </Link>
            </button>
            <button className="header__button-enter">
                <Link to="/signin" className="header__link-enter">
                Войти
                </Link>
            </button>
            {/* {props.children} */}
        </header>
    );
}

export default Header;