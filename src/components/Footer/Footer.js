import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footerInfo}>
        <Link className={styles.footerlink} to="/">
          <span className={styles.footerlogo}>
            <h2 className={styles.sammy}>Sammy</h2>
            <h2 className={styles.resort}>Resort</h2>
          </span>
        </Link>

        <div className={styles.footerDetails}>
          <p className={styles.footerAddress}>
            N0 11, Adekoya Estate, ogba Lagos state Phone: +2347014497590
            tunmiseadebayo9@gmail.com VIEW MAP
          </p>
          <ul className={styles.footerlist}>
            <li>
              <Link to="/" className={styles.footerlink}>
                RESORT
              </Link>
            </li>
            <li>
              <Link to="/rooms" className={styles.footerlink}>
                ACCOMMODATIONS
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.footerlink}>
                SPA WEDDINGS & EVENTS CONTACT US ACCESSIBILITY ADVICE
              </Link>
            </li>
          </ul>
          <div className={styles.footerMedia}>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
