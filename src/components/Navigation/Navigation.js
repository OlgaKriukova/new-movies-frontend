import { Link } from "react-router-dom";

import './Navigation.css';

function Navigation() {
    return (
            <>
                <div className="header-movies">
                    {/* <div className="sidebar"> */}
                        <div className="sidebar__icon" />     
                        <nav className="nav-tab">
                            
                                
                                <Link to="/movies" className="nav-tab__list nav-tab__list_active">
                                    Фильмы
                                </Link>
                                <Link to="/saved-movies" className="nav-tab__list">
                                    Сохранённые фильмы
                                </Link>
                                <Link to="/" className="nav-tab__list nav-tab__list-show">
                                    Главная
                                </Link>
                                
                        </nav>

                        <Link to='/profile' className="nav-tab__account">
                        Аккаунт
                        <div className="nav-tab__icon"></div>
                        </Link>
                    {/* </div> */}
                    

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