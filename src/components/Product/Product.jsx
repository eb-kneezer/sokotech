import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'

import { MarketContext } from '../../context'

import styles from './Product.module.css'

const Product = ({id, title, image, price}) => {

    const history = useHistory();
    const {handleAddToBag} = useContext(MarketContext)

    return (
        <div
        id="prodcon"
        onClick={(e) => {
            if (e.target.id !== "add"){
                history.push(`/product/${id}`)
            }
        }}
        
        className={styles.singleProduct}>
            <div className={styles.productImg}>
                <img src={image} alt={title}/>
            </div>
            <div className={styles.productDetails}>
                <p className={styles.productName}>{title}</p>
                <p className={styles.productPrice}>{`UGX ${price}`}</p>
                <button 
                id="add"
                onClick={() => handleAddToBag(id)}
                className={styles.addBtn}><i className="fas fa-plus"></i>Add</button>
            </div>
        </div>
    )
}

export default Product;

