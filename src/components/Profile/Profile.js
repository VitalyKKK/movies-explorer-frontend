import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

function Profile(props) {
  const { handleMenuClick, menuOpen, closePopups } = props;

  return (
    <section className='profile'>
      <BurgerMenu menuOpen={menuOpen} closePopups={closePopups} />
      <Header loggedIn={true} handleMenuClick={handleMenuClick} />
      <main className='profile__container'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form id='form' className='profile__form'>
          <div className='profile__row'>
            <label className='profile__field'>Имя</label>
            <input
              name='name'
              className='profile__input'
              id='name-input'
              type='text'
              minLength='2'
              maxLength='40'
              defaultValue='Виталий'
              placeholder='Имя'
              required
            />
            <span className='profile__input-error'></span>
          </div>
          <div className='profile__border'></div>
          <div className='profile__row'>
            <label className='profile__field'>E-mail</label>
            <input
              name='email'
              className='profile__input'
              id='email-input'
              type='email'
              defaultValue='pochta@yandex.ru'
              placeholder='email'
              required
            />
            <span className='profile__input-error'></span>
          </div>
          <button
            type='submit'
            className='profile__button-save profile__button'
          >
            Редактировать
          </button>
          <Link to='/'
            className='profile__button-logout profile__button'
          >
            Выйти из аккаунта
          </Link>
        </form>
      </main>
    </section>
  );
}

export default Profile;
