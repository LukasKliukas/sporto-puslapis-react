import React from 'react';
import Button from '../Button';
import css from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.header}>
      Sport for everyone
      <Link to='/'> Pagrindinis puslapis </Link>
      <Link to='/articles'> Straipsniai </Link>
    </div>
  );
};

export default Header;
