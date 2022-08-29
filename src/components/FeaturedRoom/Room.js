import React from "react";
import { Link } from "react-router-dom";
import styles from "./Room.module.css";

const Room = ({ room }) => {
  console.log("room", room);
  return (
    <div className={styles.room}>
      <div className={styles.imgContainer}>
        <img src={room.images[0]} alt={room.slug} className={styles.roomImg} />
        <div className={styles.priceTop}>
          <h3>${room.price}</h3>
          <p className={styles.featurepara}>per night</p>
        </div>

        <Link to={`/rooms/${room.slug}`} className={`${styles.btnPrimary} ${styles.roomLink} `} >Features</Link>
      </div>
      <p className={styles.roomInfo}>{room.name}</p>
    </div>
  );
};

export default Room;
