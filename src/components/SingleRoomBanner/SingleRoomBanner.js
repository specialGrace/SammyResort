import React from 'react'
import styles from './SingleRoomBanner.module.css'
import { Link} from 'react-router-dom'

const SingleRoomBanner = () => {
  return (
    <div className={styles.SingleRoomBackground}>
  <div className={styles.SingleRoomBanner}>
    <h1>Double Deluxe Room</h1>
    <div></div>
    <p></p>
    <Link className={styles.btnPrimary} to="/Rooms">
      Back to rooms
    </Link>
  </div>
</div>

  )
}

export default SingleRoomBanner