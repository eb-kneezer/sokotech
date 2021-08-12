import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../redux/activeTab/tabActions";

const Header = () => {
  const dispatch = useDispatch();
  const { cart, activeTab } = useSelector(state => state);

  return (
    <div className={styles.header}>
      <div className={styles.madeWith}>
        <div className={styles.container}>
          <p className={styles.withsoko}>Store made with SOKO</p>
        </div>
      </div>

      <div className={styles.store}>
        <div className={styles.container}>
          <div className={styles.storeDetails}>
            <div className={styles.storeIcon}>
              <i className='fas fa-store'></i>
            </div>
            <div className={styles.storeDescription}>
              <h2 className={styles.storeName}>Target</h2>
              <p>Cham Towers, Plot 12 Lekki Rd, Lagos. Ng</p>
            </div>
          </div>
          <div className={styles.storeBagAccount}>
            <Link onClick={() => dispatch(setActiveTab("bag"))} to='/bag'>
              <button
                className={`${styles.storeBag} ${
                  activeTab === "bag" ? styles.active : ""
                }`}>
                <i className='fas fa-shopping-bag'></i>
                <span
                  className={`${styles.popup} ${
                    cart.length === 0 ? styles.hidden : ""
                  }`}>
                  {cart.reduce((init, item) => init + item.count, 0)}
                </span>
                Bag
              </button>
            </Link>

            <Link
              onClick={() => dispatch(setActiveTab("account"))}
              to='/account'>
              <button
                className={`${styles.storeAccount} ${
                  activeTab === "account" ? styles.active : ""
                }`}>
                <i className='fas fa-user'></i>
                Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
