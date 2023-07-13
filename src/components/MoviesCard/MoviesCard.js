import React from 'react';
import './MoviesCard.css';
import image1 from '../../images/pic_1.jpg';
import image2 from '../../images/pic_2.jpg';
import image3 from '../../images/pic_3.jpg';

function MoviesCard(props) {
  const { trailerLink, handleLikeClick, isLiked, card } = props;
  return (
    <>
      <li className='card'>
        <a href={card.trailerLink} target='_blank' rel='noreferrer'>
          <img className='card__image' alt={card.nameRU} src={image1} />
        </a>
        <div className='card__container'>
          <figcaption className='card__info-container'>
            <h2 className='card__text'>{card.nameRU}</h2>
            <p className='card__time'>{card.duration}</p>
          </figcaption>
          <button type='button' className='card__delete-button'></button>
          <button
            type='button'
            className={`card__like-button ${
              isLiked ? 'card__like-button_active' : ''
            }`}
            onClick={handleLikeClick}
          ></button>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
