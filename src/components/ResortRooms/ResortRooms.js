import React from 'react'
import { Link } from 'react-router-dom';
import styles from './ResortRooms.module.css'

const ResortRooms = ({ rooms }) => {
  console.log('rooms', rooms)
  return (
    <div className={styles.resortrooms}>
      <div className={styles.imgContainer}>
        <img src={rooms.images[0]} alt={rooms.slug} className={styles.roomsImg} />
        <div className={styles.priceTop}>
          <h3>${rooms.price}</h3>
          <p className={styles.filterparagraph}>per night</p>
        </div>

        <Link to={`/rooms/${rooms.slug}`} className={`${styles.btnPrimary} ${styles.roomsLink} `}>
    Features
        </Link>
        
      </div>
      <p className={styles.roomsInfo}>{rooms.name}</p>
    </div>
  );
}

export default ResortRooms