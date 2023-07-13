import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const { isLiked, handleLikeClick, cards } = props;

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map((card, i) => (
          <MoviesCard
            key={i}
            isLiked={isLiked}
            handleLikeClick={handleLikeClick}
            card={card}
          />
        ))}
      </ul>
      <div className='cards__button-container'>
        <button className='cards__button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
