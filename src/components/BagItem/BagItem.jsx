import React, {useContext} from 'react'
import { MarketContext } from '../../context'

import styles from './BagItem.module.css'

const BagItem = ({name, price, count}) => {

    const {cart} = useContext(MarketContext);
    const [bag, setBag] = cart;

    const handleCount = (e) => {
        if (e.target.id === 'increase') {
            
        }
    }

    return (
        <div className={styles.bagItem}>
            <p className={styles.itemName}>{name}</p>
            <p className={styles.piece}>Per piece</p>
            <p className={styles.itemPrice}>UGX {price}</p>
            <div className={styles.amount}>
                <span
                id="decrease"
                onClick={handleCount} 
                className={styles.change}>-</span>
                <span className={styles.num}>{count}</span>
                <span
                id="increase"
                onClick={handleCount}
                className={styles.change}>+</span>
            </div>
        </div>
    )
}

export default BagItem;