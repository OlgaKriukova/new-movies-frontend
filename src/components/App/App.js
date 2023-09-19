import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main'
// import Header from '../Header/Header';
// import Navigation from '../Navigation/Navigation';
// import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

import GeneralForm from '../GeneralForm/GeneralForm';

  function App(){
    return (
      <div className="page">
        <div className="page__container fonts">
          
          <Routes>
            <Route path='/' element={ <Main /> }></Route>
            <Route path='/movies' element={ <Movies /> }></Route>
            <Route path='/saved-movies' element={<SavedMovies />}></Route>
            <Route path='/signin' element={<Login />}></Route>
            <Route path='/signup' element={<Register />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/gf' element={<GeneralForm />}></Route>

          </Routes>
        </div>
    
      </div>
    );
  }

export default App;