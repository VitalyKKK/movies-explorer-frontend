import { useState } from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
      setEmail(e.target.value);
  }


  function handleChangePassword(e) {
      setPassword(e.target.value);
  }

  function handleSubmt(e) {
      e.preventDefault();
      handleLogin({  email, password });
  }

  return (
    <Form
      title='Рады видеть!'
      buttonText='Войти'
      question='Еще не зарегистрированы?'
      linkText='Регистрация'
      link='/signup'
      handleSubmt={handleSubmt}
    >
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
        required
        value={password}
        onChange={handleChangePassword}
      />
      <span className='form__input-error'></span>
    </Form>
  );
}

export default Login;
