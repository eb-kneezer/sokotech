import React from 'react'

import styles from './EmptyBag.module.css'

import emoji from '../../assets/noItem.png'

export default function EmptyBag() {
    return (
        <div className={styles.emptyContainer}>
            <div className={styles.confused}>
                <img src={emoji} alt="empty"/>
            </div>
            <h3>It's empty here</h3>
            <p>start shopping to add items to your bag</p>

            
        </div>
    )
}
