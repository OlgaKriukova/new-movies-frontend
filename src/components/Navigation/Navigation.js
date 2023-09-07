import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
            <>
                <div className="header-movies">
                    <div className="sidebar">
                        {/* <div className="sidebar__icon" />  */}
                        <nav className="nav-tab nav-burger nav-burger_active">
                            
                                
                                <a href="№" className="nav-tab__list nav-tab__list_active nav-burger__list nav-burger__list_active">
                                    Фильмы
                                </a>
                                <a href="№" className="nav-tab__list nav-burger__list">
                                    Сохранённые фильмы
                                </a>
                                <a href="#" className="nav-tab__list nav-tab__list-show nav-burger__list">
                                    Главная
                                </a>
                                
                        </nav>

                        <a href='#' className="nav-tab__account nav-burger__account">
                        Аккаунт
                        <div className="nav-tab__icon nav-burger__icon"></div>
                        </a>
                    </div>

                </div>
                <div className="heder-burger" />
                {/* <div className="sidebar">
                    <div className="sidebar__icon" />
                    <div className="nav-burger nav-burger_active">
                    <a href="#" className="nav-burger__list">
                        Главная
                    </a>
                    <a
                        href="#"
                        className="nav-burger__list nav-burger__list_active"
                    >
                        Фильмы
                    </a>
                    <a href="#" className="nav-burger__list">
                        Сохранённые фильмы
                    </a>
                    </div>
                    <a className="nav-burger__account">
                    Аккаунт
                    <div className="nav-burger__icon"></div>
                    </a>
                </div> */}
            </>

    );
}

export default Navigation;