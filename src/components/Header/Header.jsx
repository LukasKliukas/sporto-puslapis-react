import React from 'react';
import css from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.mainLogo}>
        <p>SPORT FOR EVERYONE</p>
      </div>
      <div className={css.buttons}>
        <Link className={css.link} to='/'>
          Pagrindinis puslapis
        </Link>
        <Link className={css.link} to='/articles'>
          Straipsniai
        </Link>
      </div>
    </div>
  );
};

export default Header;
