import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.storeFeatures}>
        <div className={styles.featureContainer}>
          <div className={styles.feature}>
            <i className='fas fa-truck'></i>
            <p>Fast Delivery</p>
          </div>
          <div className={styles.feature}>
            <i className='fas fa-award'></i>
            <p>Buyer Protection</p>
          </div>
          <div className={styles.feature}>
            <i className='fas fa-headset'></i>
            <p>Customer Support</p>
          </div>
        </div>
      </div>

      <div className={styles.storeDetails}>
        <h4>store details</h4>
        <div className={styles.storeDescription}>
          <h2 className={styles.storeName}>Target</h2>
          <p>Cham Towers, Plot 12 Lekki Rd, Lagos. Ng</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
