import React from 'react';
import styles from './Header.module.scss';

import logo from './img/logo.png';



function Header() {


  return (
    <div className={styles.header}>
      
      <span className={styles.logo}>
        <img src={logo} alt=""/>
      </span>

    </div>
  );
}

export default Header;
