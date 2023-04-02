import React from 'react';
import css from './Card.module.css';

const Card = (props) => {
  return (
    <div className={css.card}>
      <img
        src='https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1380&t=st=1680454535~exp=1680455135~hmac=0b41e433a98b269d090db21fa78188471dfffc302006602096437fa6ea370a0a'
        alt='logo'
      />
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
