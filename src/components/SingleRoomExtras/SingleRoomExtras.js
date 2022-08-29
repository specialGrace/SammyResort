import React from 'react'
import styles from './SingleRoomExtras.module.css'

const SingleRoomExtras = () => {
  return (
    <div className={styles.roomExtras}>
      <h6>extras</h6>
      <ul className={styles.extras}>
        <li>Plush pillows and breathable bed linens</li>
        <li>Soft, oversized bath towels</li>
        <li>Full-sized, pH-balanced toiletries</li>
        <li>Complimentary refreshments</li>
        <li>Adequate safety/security</li>
        <li>Internet</li>
        <li>Comfortable beds</li>
      </ul>
    </div>
  );
}

export default SingleRoomExtras