import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg';

function Form({ children, title, buttonText, question, linkText, link }) {
  return (

    <div className='form-container'>
      <Link to='/' className='logo'>
        <img src={logo} alt='логотип' />
      </Link>
      <h1 className='form-container__title'>{title}</h1>
      <form className='form' id='form'>
        {children}
        <button type='submit' className='form__button-save'>
          {buttonText}
        </button>
      </form>
      <p className='form-container__text'>
        {question}
        <Link to={link} className='form-container__link'>
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default Form;
