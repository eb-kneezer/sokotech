import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import BagItem from '../../components/BagItem/BagItem'
import BagList from '../../components/BagList/BagList'
import EmptyBag from '../../components/EmptyBag/EmptyBag'
import Successful from '../../components/Successful/Successful'
import { MarketContext } from '../../context'

import styles from './BagPage.module.css'

const BagPage = () => {

    const {cart, tab} = useContext(MarketContext)
    const [bag] = cart;
    const [activeTab, setActiveTab] = tab;

    const total = bag.reduce((init, item) => {
        return init + (item.price * item.count)
    }, 0).toFixed(2)


    return (
        <div className={styles.bagPage}>
                {
                    bag.length === 0 ?
                    <div className={styles.empty}>
                        <EmptyBag/>
                        <Link onClick={() => setActiveTab('')} to='/'>
                            <button className={styles.backBtn}>Back to Homepage</button>
                        </Link>
                    </div> :
                    bag.length > 0 ?
                    <div className={styles.bagPageContainer}>
                        <div className={styles.loginComponent}>

                        </div>
                        <div className={styles.bagItems}>
                            <BagList />
                            <div className={styles.totalCost}>
                                <p>Subtotal <span className={styles.right}>UGX {total}</span></p>
                                <p className={styles.delivery}>Delivery <span className={`${styles.green} ${styles.right}`}>Free</span></p>
                                <hr/>
                                <p className={styles.total}>Total <span className={styles.right}>UGX {total}</span></p>
                                <p className={styles.taxes}>Inclusive of all taxes</p>
                                <hr/>
                                <p className={styles.green}>You are about to save UGX 27,000 on this order</p>
                            </div>
                            
                        </div>
                    </div> :
                        ''
                }
            {/* <Successful /> */}
        </div>
    )
}

export default BagPage