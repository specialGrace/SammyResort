import React from 'react' 
import { BsPhone } from 'react-icons/bs'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from 'react-icons/ai'
import {FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.row}>
          <div className={styles.sectionTitle}>
            <h2>Contact Us</h2>
          </div>
        </div>
        <h4 className={styles.contactSubTitle}>We Are At Your Services</h4>
        <div className={styles.contactInfo}>
          <div className={styles.iconContainer}>
            <BsPhone className={styles.icon} />
          </div>
          <h4>Call Us On</h4>
          <p>+2347014497590</p>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.iconContainer}>
            <HiOutlineLocationMarker className={styles.icon} />
          </div>
          <h4>Location</h4>
          <p>Ikeja Lagos</p>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.iconContainer}>
            <AiOutlineMail className={styles.icon} />
          </div>
          <h4>Email</h4>
          <p>tunmiseadebayo9@gmail.com</p>
        </div>

        <div className={styles.contactInfo}>
          <a
            className={styles.mediaLink}
            href="https://www.twitter.com/gracias_tech/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <div className={styles.iconContainer}>
              <FaTwitter className={styles.icon} />
            </div>
            <h4>Twitter</h4>
          </a>
        </div>

        <div className={styles.contactInfo}>
          <a
            className={styles.mediaLink}
            href="https://www.facebook.com/profile.php?id=100082500675336"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <div className={styles.iconContainer}>
              <FaFacebook className={styles.icon} />
            </div>
            <h4>Facebook</h4>
          </a>
        </div>
        <div className={styles.contactInfo}>
          <a
            className={styles.mediaLink}
            href="https://www.instagram.com/gracias_tech/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <div className={styles.iconContainer}>
              <FaInstagram className={styles.icon} />
            </div>
            <h4>Instagram</h4>
          </a>
        </div>
      </div>
    </div>
  );
}


export default Contact