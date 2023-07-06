import React from 'react';
import myphoto from '../../images/myphoto.jpeg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title section-title'>Студент</h2>
      <div className='about-me__container'>
        <article className='about-me__content'>
          <h3 className='about-me__heading'>Виталий</h3>
          <p className='about-me__info'>Фронтенд-разработчик, 36 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Кургане, закончил Курганскую государственную
            сельскохозяйственную академию. У меня есть жена и двое детей.
            Работаю графическим дизайнером. Изучал дизайн интерьеров.
            Интересуюсь веб-разработкой. После курса по веб-разработке, буду
            работать над закреплением знаний.
          </p>
          <a
            href='https://github.com/VitalyKKK'
            className='about-me__link'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </article>
        <img src={myphoto} alt='фото студента' className='about-me__photo' />
      </div>
    </section>
  );
}

export default AboutMe;
