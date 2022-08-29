import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RoomsBanner.module.css'

const RoomsBanner = () => {
  return (
      <div className={styles.roomsbackground}>
          <div className={styles.roomsbanner}>
              <h1>Our rooms</h1>
              <div></div>
              <p></p>
              <Link className={styles.btnPrimary} to="/">return home</Link>
          </div>
      </div>

  )
}

export default RoomsBanner


 