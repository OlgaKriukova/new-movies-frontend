import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies() {
    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <MoviesCardList />
            <div className="more">
                <button className="more__button">Ещё</button>
            </div>
            <Footer />
        </>
    )
}

export default Movies;