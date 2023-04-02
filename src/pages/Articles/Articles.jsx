import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import css from './Articles.module.css';

const Articles = () => {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <Card title='Mityba' content='Maistas yra skanu' />
      </div>
    </div>
  );
};

export default Articles;
