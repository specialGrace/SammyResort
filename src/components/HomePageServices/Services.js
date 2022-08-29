import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import {IoIosRestaurant} from 'react-icons/io'
import styles from'./Services.module.css'
const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.ServiceHeader}>
        <h4>Services</h4>
      </div>

      <div className={styles.serviceContainer}>
        <div className={styles.service}>
          <span>
            <FaCocktail />
          </span>
          <h6 className={styles.seviceType}>Free Coctail</h6>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className={styles.service}>
          <span>
            <FaHiking />
          </span>
          <h6 className={styles.seviceType}>Endless Hiking</h6>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className={styles.service}>
          <span>
            <FaShuttleVan />
          </span>
          <h6 className={styles.seviceType}>Free ShuttleVan</h6>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className={styles.service}>
          <span>
            <IoIosRestaurant />
          </span>
          <h6 className={styles.seviceType}>Restaurant</h6>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </div>
    </div>
  );
}

export default Services