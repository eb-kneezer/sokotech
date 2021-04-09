import React, {useContext} from 'react'
import { MarketContext } from '../../context'

import EmptyBag from '../EmptyBag/EmptyBag'
import BagItem from '../BagItem/BagItem'

import styles from './BagList.module.css'

export default function BagList() {

    const {cart} = useContext(MarketContext)
    const [bag, setBag] = cart;

    return (
        <div className={styles.bag}>
                    <div className={styles.bagHeader}>
                        <h3>Bag</h3>
                        <span className={styles.number}>{bag.reduce((init, item) => ( init +  item.count), 0)}</span>
                    </div>
                    <div className={styles.bagContainer}>
                        <p 
                        onClick={() => setBag([])}
                        className={`${styles.clear} ${bag.length === 0 ? styles.hide : ''}`}>Clear Bag</p>
                        {
                            bag.length > 0 ? 
                            bag.map(item => <BagItem 
                                key={item.id}
                                item={item} />) :
                                bag.length === 0
                                 ?
                                <EmptyBag /> :
                                ''
                        }
                    </div>
                </div>
    )
}
