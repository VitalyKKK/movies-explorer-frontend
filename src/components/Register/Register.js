import { useState } from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Register({ handleRegister }) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
      setEmail(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
}

  function handleChangePassword(e) {
      setPassword(e.target.value);
  }

  function handleSubmt(e) {
      e.preventDefault();
      handleRegister({ name, email, password });
  }

  return (
    <Form
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      question='Уже зарегистрированы?'
      linkText='Войти'
      link='/signin'
      handleSubmt={handleSubmt}
    >
      <label className='form__field'>Имя</label>
      <input
        name='name'
        className='form__input'
        id='name-input'
        type='text'
        minLength='2'
        maxLength='40'
        placeholder='Имя'
        required
        value={name}
        onChange={handleChangeName}
      />
      <span className='form__input-error'></span>
      <label className='form__field'>E-mail</label>
      <input
        name='email'
        className='form__input'
        id='email-input'
        type='email'
        placeholder='email'
        required
        value={email}
        onChange={handleChangeEmail}
      />
      <span className='form__input-error'></span>
      <label className='form__field'>Пароль</label>
      <input
        name='password'
        className='form__input'
        id='password-input'
        type='password'
        placeholder='Введите пароль'
        minLength='6'
        required
        value={password}
        onChange={handleChangePassword}
      />
      <span className='form__input-error'></span>
    </Form>
  );
}

export default Register;
