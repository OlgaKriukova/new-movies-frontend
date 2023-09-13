import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList() {
    return(
        <section className="movies-card-list" aria-label="фото">
            <MoviesCard />
        </section>
        
    );
}

export default MoviesCardList;