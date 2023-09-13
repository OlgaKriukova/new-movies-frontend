import landing_promo_pic from '../../images/landing_promo_pic.png'

import './Promo.css';

function Promo() {
    return(
        <section className="promo">
            <h1 className="promo__title">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <img src={landing_promo_pic} className="promo__pic" />
        </section>
    );
}

export default Promo;