import { Link } from 'react-router-dom';

import './Profile.css';

function Profile() {
    return(
        <>
            <div className="profile-form">
                <h1 className="title-form title-form-profile">Привет, Виталий!</h1>
                <form className="profile-form__table">
                    <div className="profile-form__wrap">
                        <label htmlFor="name" className="profile-form__label">
                        Имя
                        </label>
                        <input
                        id="name"
                        className="profile-form__input"
                        type="text"
                        placeholder="Виталий"
                        required=""
                        minLength={2}
                        maxLength={25}
                        defaultValue=""
                        />
                    </div>
                    <div className="profile-form__wrap">
                        <label className="profile-form__label">
                        E-mail
                        </label>
                        <input
                        id="name"
                        className="profile-form__input"
                        type="email"
                        placeholder="pochta@yandex.ru"
                        required=""
                        minLength={7}
                        maxLength={25}
                        />
                    </div>
                </form>
                <div className="prof">
                <span className="prof-form__error">
                    При обновлении профиля произошла ошибка.
                </span>
                <button className="prof__button">Сохранить</button>
                <div className="prof__edit-exit">
                    <button className="prof__edit-link">Редактировать</button>
                    <button to="./" className="prof__exit-link">
                    Выйти из аккаунта
                    </button>
                </div>
                </div>
            </div>
        </>

    );
}

export default Profile;