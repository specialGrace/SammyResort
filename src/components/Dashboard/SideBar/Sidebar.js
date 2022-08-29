import React from "react";
import finee from "../image/finee.jpg"
import { Link } from "react-router-dom";
import {
  FaCreativeCommonsSamplingPlus,
  FaWpforms,
} from "react-icons/fa";

import {
  AiOutlineCalendar,
  AiOutlineContacts,
  AiOutlineRight
} from "react-icons/ai";
import {
  MdOutlineDashboardCustomize,
  MdApps
} from "react-icons/md";
import { SiElement } from "react-icons/si";
import { GiLevelFourAdvanced } from "react-icons/gi";
import {
  HiOutlineDatabase,
  HiOutlineChat,
} from "react-icons/hi";
import { RiGalleryLine } from "react-icons/ri";
import { BiBarChart } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidenavContainer}>
      <div className={styles.sidenav}>
        <span className={styles.logoname}>
          <Link to="/dashboard" className={styles.logolink}>
            <FaCreativeCommonsSamplingPlus className={styles.icon} />
          </Link>
          <Link to="/dashboard" className={styles.logolink}>
            <h1 className={styles.sammy}>SAMMY</h1>
          </Link>
        </span>
        <div className={styles.ownerInfo}>
          <img src={finee} alt="finee" className={styles.sidebarimg} />
          <p className={styles.name}>PHOEBE</p>
          <p>GENERAL MANAGER</p>
        </div>
        <ul className={styles.navlist}>
          <li>
            <Link to="/dashboard">
              <MdOutlineDashboardCustomize className={styles.icon} />
              <p>Dashboard</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
             <li>
            <Link to="/home">
              <SiElement className={styles.icon} /> <p>Home</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/ui">
              <SiElement className={styles.icon} /> <p>Profile</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/ui">
              <SiElement className={styles.icon} /> <p>Profile</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/base">
              <HiOutlineDatabase className={styles.icon} />
              <p>Order</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/advance">
              <GiLevelFourAdvanced className={styles.icon} />
              <p>Advance</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>

          <li>
            <Link to="/gallery">
              <RiGalleryLine className={styles.icon} />
              <p>Gallery</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/form">
              <FaWpforms className={styles.icon} />
              <p>Forms</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>

          <li>
            <Link to="/chart">
              <BiBarChart className={styles.icon} />
              <p>Charts</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/map">
              <FiMapPin className={styles.icon} />
              <p>Maps</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/calender">
              <AiOutlineCalendar className={styles.icon} />
              <p>Calender</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/contact">
              <AiOutlineContacts className={styles.icon} />
              <p>Contact</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/chat">
              <HiOutlineChat className={styles.icon} />
              <p>Chat</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
          <li>
            <Link to="/app">
              <MdApps className={styles.icon} />
              <p>Social App</p>
            </Link>
            <AiOutlineRight className={`${styles.icon} ${styles.right}`} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
