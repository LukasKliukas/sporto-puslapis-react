import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import css from './Articles.module.css';

const Articles = () => {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <Card
          date='2023-04-06'
          title='Mityba'
          content='Maistas yra skanu'
          src='https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1380&t=st=1680454535~exp=1680455135~hmac=0b41e433a98b269d090db21fa78188471dfffc302006602096437fa6ea370a0a'
        />
      </div>
    </div>
  );
};

export default Articles;
