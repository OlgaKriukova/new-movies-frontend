import movie from '../../images/1.jpg'

import './MoviesCard.css';

function MoviesCard() {
    return(
        <>
            <figure className="movies-card-list__card card">
                <img
                    src={movie}
                    className="card__img"
                    alt="облложка фильма"
                />
                <figcaption className="card__caption">
                    <div className="card__movie-like">
                    <p className="card__movie-title">33 слова о дизайне</p>
                    <button type="button" className="card__like" />
                    </div>
                    <p className="card__movie-time">1ч 42м</p>
                </figcaption>
            </figure>
            <figure className="movies-card-list__card card">
                <img
                    src={movie}
                    className="card__img"
                    alt="облложка фильма"
                />
                <figcaption className="card__caption">
                    <div className="card__movie-like">
                    <p className="card__movie-title">33 слова о дизайне</p>
                    <button type="button" className="card__like" />
                    </div>
                    <p className="card__movie-time">1ч 42м</p>
                </figcaption>
            </figure>
            <figure className="movies-card-list__card card">
                <img
                    src={movie}
                    className="card__img"
                    alt="облложка фильма"
                />
                <figcaption className="card__caption">
                    <div className="card__movie-like">
                    <p className="card__movie-title">33 слова о дизайне</p>
                    <button type="button" className="card__like" />
                    </div>
                    <p className="card__movie-time">1ч 42м</p>
                </figcaption>
            </figure>
            <figure className="movies-card-list__card card">
                <img
                    src={movie}
                    className="card__img"
                    alt="облложка фильма"
                />
                <figcaption className="card__caption">
                    <div className="card__movie-like">
                    <p className="card__movie-title">33 слова о дизайне</p>
                    <button type="button" className="card__like" />
                    </div>
                    <p className="card__movie-time">1ч 42м</p>
                </figcaption>
            </figure>
            <figure className="movies-card-list__card card">
                <img
                    src={movie}
                    className="card__img"
                    alt="облложка фильма"
                />
                <figcaption className="card__caption">
                    <div className="card__movie-like">
                    <p className="card__movie-title">33 слова о дизайне</p>
                    <button type="button" className="card__like" />
                    </div>
                    <p className="card__movie-time">1ч 42м</p>
                </figcaption>
            </figure>
            <figure className="movies-card-list__card card">
                <img
                    src={movie}
                    className="card__img"
                    alt="облложка фильма"
                />
                <figcaption className="card__caption">
                    <div className="card__movie-like">
                    <p className="card__movie-title">33 слова о дизайне</p>
                    <button type="button" className="card__like" />
                    </div>
                    <p className="card__movie-time">1ч 42м</p>
                </figcaption>
            </figure>
            <figure className="movies-card-list__card card">
                <img
                    src={movie}
                    className="card__img"
                    alt="облложка фильма"
                />
                <figcaption className="card__caption">
                    <div className="card__movie-like">
                    <p className="card__movie-title">33 слова о дизайне</p>
                    <button type="button" className="card__like" />
                    </div>
                    <p className="card__movie-time">1ч 42м</p>
                </figcaption>
            </figure>
        </>

    )
}

export default MoviesCard;