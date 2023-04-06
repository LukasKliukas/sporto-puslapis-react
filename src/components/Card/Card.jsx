import React from 'react';
import css from './Card.module.css';

const Card = (props) => {
  return (
    <div className={css.card}>
      <img src={props.src} alt='logo' />
      <div className={css.date}>Data : {props.date}</div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
