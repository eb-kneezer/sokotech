import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MobileNav.module.css";

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className={styles.mobileNav}>
      <Link
        onClick={() => setActiveNav("home")}
        to='/'
        style={{ textDecoration: "none", color: "white" }}>
        <div
          className={`${styles.navButtons} ${
            activeNav === "home" && styles.active
          }`}>
          <i className='fas fa-store-alt'></i>
          <span>Home</span>
        </div>
      </Link>
      <Link
        onClick={() => setActiveNav("categories")}
        to='/'
        style={{ textDecoration: "none", color: "white" }}>
        <div
          className={`${styles.navButtons} ${
            activeNav === "categories" && styles.active
          }`}>
          <i className='fas fa-tags'></i>
          <span>Categories</span>
        </div>
      </Link>
      <Link
        onClick={() => setActiveNav("bag")}
        to='/bag'
        style={{ textDecoration: "none", color: "white" }}>
        <div
          className={`${styles.navButtons} ${
            activeNav === "bag" && styles.active
          }`}>
          <i className='fas fa-shopping-bag'></i>
          <span>Bag</span>
        </div>
      </Link>
      <Link
        onClick={() => setActiveNav("account")}
        to='/account'
        style={{ textDecoration: "none", color: "white" }}>
        <div
          className={`${styles.navButtons} ${
            activeNav === "account" && styles.active
          }`}>
          <i className='fas fa-user'></i>
          <span>Account</span>
        </div>
      </Link>
    </div>
  );
};

export default MobileNav;
