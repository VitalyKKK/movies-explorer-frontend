import React, { useState, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import { authApi } from '../../utils/AuthApi';
import api from '../../utils/api';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [cards, setCards] = useState(false);
  const navigate = useNavigate();

  function handleMenuClick() {
    setMenuOpen(true);
    console.log('open');
  }

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  function closePopups() {
    setMenuOpen(false);
  }

  const tokenCheck = useCallback(() => {
    const isLogin = localStorage.getItem('isLogin');

    if (isLogin) {
      authApi
        .checkToken()
        .then((user) => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }, [navigate]);

  React.useEffect(() => {
    tokenCheck();
    loggedIn &&
      Promise.all([authApi.getUserInfo(), api.getInitialMovies()])
        .then(([userData, cardsData]) => {
          setCurrentUser(userData);
          setCards(cardsData);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [loggedIn, tokenCheck]);

  function handleLogout() {
      setLoggedIn(false);
      localStorage.removeItem('isLogin');
      setCurrentUser({})
      navigate('/', { replace: true });
  }

  function handleRegister(data) {
    authApi
      .registerUser(data)
      .then(() => {
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(data) {
    authApi
      .loginUser(data)
      .then(() => {
        localStorage.setItem('isLogin', 'true');
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    authApi
      .setUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        console.log("Обновлено!")
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
          <div className='page'>
      <div className='page__content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Login handleLogin={handleLogin}/>} />
          <Route path='/signup' element={<Register handleRegister={handleRegister} />} />
          <Route
            path='/movies'
            element={
              <Movies
                menuOpen={menuOpen}
                closePopups={closePopups}
                isLiked={isLiked}
                handleLikeClick={handleLikeClick}
                handleMenuClick={handleMenuClick}
                cards={cards}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <SavedMovies
                menuOpen={menuOpen}
                closePopups={closePopups}
                isLiked={isLiked}
                handleLikeClick={handleLikeClick}
                handleMenuClick={handleMenuClick}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <Profile
                menuOpen={menuOpen}
                closePopups={closePopups}
                handleMenuClick={handleMenuClick}
                handleUpdateUser={handleUpdateUser}
                handleLogout={handleLogout}
              />
            }
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
