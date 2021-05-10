import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { MarketContext } from '../../context'

import styles from './Order.module.css'

export default function Order({orderId, orderTime, orderItems}) {

    const {tab} = useContext(MarketContext)
    const [, setActiveTab] = tab;

    const history = useHistory()

    const orderCost = orderItems.reduce((init, item) => {
        return init + (item.price * item.count)
    }, 0).toFixed(2)

    const totalItems = orderItems.reduce((init, item) => {
        return init + item.count
    }, 0)


    const handleClick = () => {
        history.push(`/trackorder/${orderId}`)
        setActiveTab('')
    }

    return (
        <div
        onClick={()=> handleClick()} 
        className={styles.order}>
            <div className={styles.storeName}>
                <h3>Target</h3>
            </div>
            <div className={styles.orderDetails}>
                <p className={styles.orderNum}>{`Order #${orderId}`}<span className={styles.detailsRight}>{`UGX ${orderCost}`}</span></p>
                <p>{`${totalItems} item(s)`}<span className={styles.detailsRight}>{orderTime}</span></p>
            </div>
            <div className={styles.orderStatus}>
                shipped
            </div>
        </div>
    )
}
