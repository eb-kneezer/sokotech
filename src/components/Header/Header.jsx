import React, {useContext} from 'react'
import { MarketContext } from '../../context'

import styles from './Header.module.css'

const Header = () => {

    const {cart} = useContext(MarketContext)
    const [bag] = cart;


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
                            <i className="fas fa-store"></i>
                        </div>
                        <div className={styles.storeDescription}>
                            <h2 className={styles.storeName}>Target</h2>
                            <p>Cham Towers, Plot 12 Nkruma Rd, Kampala. Ug</p>
                        </div>
                    </div>
                    <div className={styles.storeBagAccount}>
                        <button className={styles.storeBag}>
                            <i className="fas fa-shopping-bag"></i>
                            <span className={`${styles.popup} ${bag.length === 0 ? styles.hidden : ''}`} >{bag.length}</span>
                            Bag
                        </button>
                        <button className={styles.storeAccount}>
                            <i className="fas fa-user"></i>
                            Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header