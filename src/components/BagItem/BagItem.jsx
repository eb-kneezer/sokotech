import React, {useContext} from 'react'
import { MarketContext } from '../../context'

import styles from './BagItem.module.css'

const BagItem = ({item}) => {

    const {cart} = useContext(MarketContext);
    const [bag, setBag] = cart;

    const handleCount = (e) => {
        
        let updatedCount = bag.map(i => {
            if (i.id === item.id) {
                if (e.target.id === "increase"){
                    return {...i, count: i.count += 1}
                } else {
                    return {...i, count: i.count -= 1}
                }

            }
            return i;
        })
        
        let filteredCount = updatedCount.filter(item => item.count !== 0)
        
        setBag(filteredCount)
    }

    return (
        <div className={styles.bagItem}>
            <p className={styles.itemName}>{item.title}</p>
            <p className={styles.piece}>Per piece</p>
            <p className={styles.itemPrice}>UGX {item.price}</p>
          
          {/* <CountIncDec item={item}/> */}
            <div className={styles.amount}>
                <span
                id="decrease"
                onClick={handleCount} 
                className={styles.change}>-</span>
                <span>{item.count}</span>
                <span
                id="increase"
                onClick={(e) => handleCount(e)}
                className={styles.change}>+</span>
            </div>
        </div>
    )
}

export default BagItem;