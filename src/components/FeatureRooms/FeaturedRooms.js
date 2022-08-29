import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import Room from "../FeaturedRoom/Room";
import styles from './FeaturedRooms.module.css'

const FeaturedRooms = () => {
  const { featuredRooms } = useContext(GlobalContext);
  return (
    <div className={styles.featureRooms}>
      <div className={styles.featureHeader}>
        <h4>Featured Rooms</h4>
      </div>
      <div className={styles.featuredRoomsCenter}>
        {featuredRooms.map((room) => (
          <Room room={room} key={room.slug} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
