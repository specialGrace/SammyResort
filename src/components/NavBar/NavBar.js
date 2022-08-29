import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navcontainer}>
      <Link className={styles.navlink} to="/">
        <span className={styles.navlogo}>
          <h2 className={styles.sammy}>Sammy</h2>
          <h2 className={styles.resort}>Resort</h2>
        </span>
      </Link>

      <ul className={styles.navlist}>
        <li>
          <Link to="/" className={styles.navlink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/rooms" className={styles.navlink}>
            Rooms
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className={styles.navlink}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navlink}>
          Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar
