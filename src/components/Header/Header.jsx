import React from "react";
import { FaUsers, FaSearch, FaGlobeAmericas } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <FaUsers className={styles.logoIcon} />
          <h1 className={styles.title}>UserDirectory Pro</h1>
        </div>
        
        <div className={styles.taglineContainer}>
          <FaSearch className={styles.taglineIcon} />
          <p className={styles.tagline}>Discover & connect with professionals worldwide</p>
          <FaGlobeAmericas className={styles.taglineIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;