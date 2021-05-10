import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import AccountDetails from '../../HOC/AccountDetails/AccountDetails'
import BagList from '../../HOC/BagList/BagList'
import EmptyBag from '../../components/EmptyBag/EmptyBag'
import { MarketContext } from '../../context'

import styles from './BagPage.module.css'

const BagPage = () => {
    // const history = useHistory()

    // ------GET STATE FROM CONTEXT -------\\

    const {cart, tab} = useContext(MarketContext);
    const [bag] = cart;
    const [, setActiveTab] = tab;


    //-------GET TOTAL BAG PRICE----- \\

    const total = bag.reduce((init, item) => {
        return init + (item.price * item.count)
    }, 0).toFixed(2);


    // if (history.location.pathname === '/bag')


    return (
        <div className={styles.bagPage}>
            
            {/* <div className={styles.goBack}><i className="fas fa-chevron-circle-left"></i></div> */}
                {
                    bag.length === 0 ?
                    <div className={styles.empty}>
                        <EmptyBag/>
                        <Link onClick={() => setActiveTab('')} to='./'>
                            <button className={styles.backBtn}>Back to Homepage</button>
                        </Link>
                    </div> :
                    
                    bag.length > 0 ?
                    <div className={styles.bagPageContainer}>
                        <div className={styles.loginComponent}>
                            <AccountDetails />
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
        </div>
    )
}

export default BagPage