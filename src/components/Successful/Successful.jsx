import React from 'react'

import styles from './Successful.module.css'
import yayImg from '../../assets/yayy.png' 

export default function Successful() {
    return (
        <div className={styles.successful}>
            <img src={yayImg} alt="party popper"/>
            <h3>Thank you! <br/> Your order has been placed successfully</h3>
            <p>you will recieve a confirmation message as soon as the order is accepted</p>
            <p>Order Number: <span>John-43dfv</span> </p>

            <div className={styles.successCta}>
                <button className={styles.track}>Track Order</button>
                <button className={styles.goHome}>Continue Shopping</button>
            </div>
        </div>
    )
}
