import { Link } from 'react-router-dom';

import './GeneralForm.css'

function GeneralForm(props) {

    return(
        <div className="form profile-form">
                <h1 className="title-form">{props.titleFormText}</h1>
                <form className="form__table">
                    {props.existingInputs.includes('name')
                      ? <div className="form__list form__list_active">
                            <label htmlFor="name" className="form__label">
                                Имя
                            </label>
                            <input
                                id="name"
                                className="form__input"
                                type="text"
                                placeholder="Виталий"
                                required=""
                                minLength={2}
                                maxLength={25}
                                defaultValue=""
                            />
                        </div>
                      : <></>
                    }
                    {props.isEmailExist
                      ? <div className="form__list form__list_active">
                            <label htmlFor="email" className="form__label">
                                E-mail
                            </label>
                            <input
                                id="name"
                                className="form__input"
                                type="email"
                                placeholder="pochta@yandex.ru"
                                required=""
                                minLength={7}
                                maxLength={25}
                            />
                        </div>
                        : <></>
                    }
                    <div className="form__list form__list_active">
                        <label htmlFor="password" className="form__label">
                            Пароль
                        </label>
                        <input
                            id="password"
                            className="form__input"
                            type="password"
                            placeholder="••••••••••••••"
                            required=""
                        />
                        <span className="form__input-error">Что-то пошло не так...</span>
                    </div>
                    <div className="reg">
                    <button className="reg__button">{props.buttonFormText}</button>
                    <div className="reg__enter">
                        <p className="reg__enter-text">{props.questionFormText} </p>
                        <Link to="/signin" className="reg__enter-link">
                        {props.linkFormText}
                        </Link>
                    </div>
                    </div>
                </form>
            </div>
    );
}

export default GeneralForm;