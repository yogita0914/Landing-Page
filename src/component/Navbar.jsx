import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.nav}>
       <div className={styles['nav-logo']}>Landing-Page</div> 
       <ul className={styles['nav-menu']}>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className={styles['nav-contact']}>Contact</li>
       </ul>
    </div>
  )
}

export default Navbar;
