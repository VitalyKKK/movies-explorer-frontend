import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

function Profile(props) {
  const { handleMenuClick, menuOpen, closePopups, handleUpdateUser, handleLogout } = props;
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEditing(true);
  }


  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser(
      name,
      email,
    );
    setIsEditing(false);
  }

  return (
    <section className='profile'>
      <BurgerMenu menuOpen={menuOpen} closePopups={closePopups} />
      <Header loggedIn={true} handleMenuClick={handleMenuClick} />
      <main className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
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
              required
              onChange={handleChangeName}
              value={name || ''}
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
              placeholder='email'
              required
              onChange={handleChangeEmail}
              value={email || ''}
            />
            <span className='profile__input-error'></span>
          </div>
          {isEditing ? (
          <button
          type='submit'
          className='profile__button-save profile__button'
          onClick={handleSubmit}
        >
          Сохранить
        </button>
          ) : (
            <button
            type='submit'
            className='profile__button-save profile__button'
            onClick={handleEdit}
          >
            Редактировать
          </button>
          )}

          <Link to='/'
            className='profile__button-logout profile__button'
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </Link>
        </form>
      </main>
    </section>
  );
}

export default Profile;
