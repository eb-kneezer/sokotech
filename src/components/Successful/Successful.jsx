import React, {useContext} from 'react'

import styles from './Successful.module.css'
import yayImg from '../../assets/yayy.png' 
import { Link } from 'react-router-dom'
import { MarketContext } from '../../context'

export default function Successful() {

const {tab} = useContext(MarketContext)
const [activeTab, setActiveTab] = tab;

    return (
        <div className={styles.successful}>
            <img src={yayImg} alt="party popper"/>
            <h3>Thank you! <br/> Your order has been placed successfully</h3>
            <p>you will recieve a confirmation message as soon as the order is accepted</p>
            <p>Order Number: <span>John-43dfv</span> </p>

            <div className={styles.successCta}>
                <button className={styles.track}>Track Order</button>
                <Link onClick={() => setActiveTab("")} to='./'>
                    <button 
                    className={styles.goHome}>Continue Shopping</button>
                </Link>
            </div>
        </div>
    )
}
