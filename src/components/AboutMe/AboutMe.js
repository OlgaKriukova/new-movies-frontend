import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
        <h3 className="title">Студент</h3>
        <div className="about-me__card">
            <div className="about-me__text">
            <h2 className="about-me__title">Виталий</h2>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__about">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
                есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
                начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
                как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
                ушёл с постоянной работы.
            </p>
            <p className="about-me__git">Github</p>
            </div>
            <img src="../../../images/Vitaliy.jpg" className="about-me__photo" alt='фото' />
        </div>
        </section>

    );
}

export default AboutMe;