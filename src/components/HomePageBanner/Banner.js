import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Banner.module.css'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerInfo}>
        <h1 className={styles.bannerHeader}>Luxurious Rooms</h1>
        <div className={styles.bannerline}></div>
        <p className={styles.bannarpara}>Your Comfort</p>
        <Link to='/rooms' className={styles.bannerBtn}>OUR ROOMS</Link>
      </div>
    </div>
  );
}

export default Banner