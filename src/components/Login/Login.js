import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Login() {
  return (
    <Form
      title='Рады видеть!'
      buttonText='Войти'
      question='Еще не зарегистрированы?'
      linkText='Регистрация'
      link='/signup'
    >
      <label className='form__field'>E-mail</label>
      <input
        name='email'
        className='form__input'
        id='email-input'
        type='email'
        placeholder='email'
        required
      />
      <span className='form__input-error'></span>
      <label className='form__field'>Пароль</label>
      <input
        name='password'
        className='form__input'
        id='password-input'
        type='password'
        placeholder='Введите пароль'
        required
      />
      <span className='form__input-error'></span>
    </Form>
  );
}

export default Login;
