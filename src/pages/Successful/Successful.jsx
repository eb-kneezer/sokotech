import React, {useContext} from 'react'

import styles from './Successful.module.css'
import yayImg from '../../assets/yayy.png' 
import { Link } from 'react-router-dom'
import { MarketContext } from '../../context'

export default function Successful() {

    //-----GET STATE FROM CONTEXT----- \\
    
    const {tab, order} = useContext(MarketContext)
    const [orders] = order;
    const [ , setActiveTab] = tab;


    return (
        <div className={styles.successfulWrapper}>

        <div className={styles.successful}>
            <img src={yayImg} alt="party popper"/>
            <h3>Thank you! <br/> Your order has been placed successfully</h3>
            <p>you will recieve a confirmation message as soon as the order is accepted</p>
            <p>Order Id: <span>{`${orders[orders.length -1].orderID}`}</span> </p>

            <div className={styles.successCta}>
                <Link onClick={() => setActiveTab("")} to={`/trackorder/${orders[orders.length -1].orderID}`}>
                    <button className={styles.track}>Track Order</button>
                </Link>
                <Link onClick={() => setActiveTab("")} to='./'>
                    <button 
                    className={styles.goHome}>Continue Shopping</button>
                </Link>
            </div>
        </div>
        </div>
    )
}
