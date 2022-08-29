import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdSearch, MdLanguage } from "react-icons/md";
import { FaExpand } from 'react-icons/fa'
import { HiOutlineBell } from 'react-icons/hi'
import {BiMessageRounded} from 'react-icons/bi'
import finee from "../image/finee.jpg";
import styles from './Tab.module.css'

const Tab = () => {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.Tabmenu}>
        <GiHamburgerMenu className={styles.menuIcon} />
      </div>

      <div className={styles.searchContainer}>
        <MdSearch />
        <p className={styles.search}>search</p>
      </div>

      <div className={styles.Tabinfo}>
        <FaExpand className={styles.icon} />
        <MdLanguage className={styles.icon} />
        <HiOutlineBell className={styles.icon} />
        <BiMessageRounded className={styles.icon} />

        <img src={finee} alt="finee" className={styles.tabImg} />
      </div>
    </div>
  );
}

export default Tab