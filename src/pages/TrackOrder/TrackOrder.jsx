import React, { useContext } from 'react'
import {Link, useParams} from 'react-router-dom'

import OrderItem from '../../components/OrderItem/OrderItem'
import { MarketContext } from '../../context'

import styles from './TrackOrder.module.css'

export default function TrackOrder() {

    // ------GET STATE FROM CONTEXT ------\\
    const {order} = useContext(MarketContext)
    const [orders] = order;

    //  -------SELECT PAGE ORDER FROM ORDER LIST BY URL ID ----- \\

    const{orderID} = useParams();
    let pageOrder = orders.filter(order => order.orderID === orderID)[0] 


    // ------ CASE: ORDER NOT FOUND ------\\

    if (!pageOrder) {
        return (
            <div className={styles.notFound}>
                <h1>404 - Order Not Found!</h1>
                <Link to="/">
                Go Home
                </Link>
            </div>
            )
    }

    // ------ TOTAL ORDER COST AND ORDER COUNT ----- \\
    
    const orderCost = pageOrder.items.reduce((init, item) => (init + (item.count * item.price)), 0).toFixed(2)
    const orderCount = pageOrder.items.reduce((init, item) => (init + item.count), 0)
    

    return (
        <div className={styles.trackorder}>
            <div className={styles.orderDetails}>
                <div className={styles.icon}>
                    <i className="fas fa-store"></i>
                </div>
                <div className={styles.text}>
                    <h4 className={styles.orderStore}>Target</h4>
                    <p>{`${pageOrder.orderTime} | 
                    ${orderCount} items | 
                    UGX ${orderCost}`}</p>
                </div>
            </div>

            <div className={styles.orderStatus}>
                <div className={styles.status}>
                    <div className={`${styles.icon} ${styles.check}`}>
                        <i className="fas fa-check"></i>
                    </div>
                    <div className={styles.text}>
                        <h4>Order Confirmed</h4>
                        <p>{pageOrder.orderTime}</p>
                    </div>
                </div>

                <div className={styles.status}>
                    <div className={styles.icon}>
                        <i className="fas fa-check"></i>
                    </div>
                    <div className={styles.text}>
                        <h4>Shipped</h4>
                        <p>pending</p>
                    </div>
                </div>

                <div className={styles.status}>
                    <div className={styles.icon}>
                        <i className="fas fa-check"></i>
                    </div>
                    <div className={styles.text}>
                        <h4>Delivered</h4>
                        <p>The delivery partner is on his way to deliver your order</p>
                    </div>
                </div>
            </div>

            <div className={styles.orderItems}>
                <p>{`${orderCount} ITEMS`}</p>
                <div className={styles.orderItemsList}>
                {
                    pageOrder.items.map(item => (
                        <OrderItem 
                        key={item.id}
                        count={item.count}
                        image={item.image}
                        price={item.price}
                        title={item.title}/>
                    ))
                }
                </div>
            </div>

            <div className={styles.orderPricing}>
                <p>Subtotal <span className={styles.right}>{`UGX ${orderCost}`}</span></p>
                <p className={styles.delivery}>Delivery <span className={`${styles.green} ${styles.right}`}>Free</span></p>
                <hr/>
                <p className={styles.total}>Total <span className={styles.right}>{`UGX ${orderCost}`}</span></p>
                <p className={styles.taxes}>Inclusive of all taxes</p>
                <hr/>
                <p className={styles.green}>You are about to save UGX 27,000 on this order</p>
            </div>


            <div className={styles.deliveryDetails}>
                <p>YOUR DELIVERY DETAILS</p>

                <div className={styles.delivery}>
                    <div>
                        <h3 className={styles.deliveryName}>{pageOrder.deliveryAddress.name}</h3>
                        <p>Cash on delivery</p>
                    </div>
                    <div>
                        <p className={styles.deliveryPhone}>{pageOrder.deliveryAddress.mobile}</p>
                        <p className={styles.deliveryAddress}>{pageOrder.deliveryAddress.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
