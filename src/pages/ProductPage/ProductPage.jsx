import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import { MarketContext } from '../../context'

import styles from './ProductPage.module.css'

const ProductPage = () => {

    const {allProducts, handleAddToBag} = useContext(MarketContext)
    const [products] = allProducts
    const {productID} = useParams()

    const pageProduct = products.find(item => item.id === (+productID));


    return (
        <div className={styles.productPage}>
            <div className={styles.container}>

                <div className={styles.product}>
                    <div className={styles.productImage}>
                        <img src={products.length > 0?pageProduct.image: ''} alt=""/>
                    </div>
                    <div className={styles.productInfo}>
                        <div>
                            <h3 style={{fontSize: '18px'}}>{products.length > 0?pageProduct.title: ''}</h3>
                            <p className={styles.productDescription}>{products.length > 0? pageProduct.description:''}</p>
                            <div className={styles.productPrice}>
                                <p>UGX {products.length > 0?pageProduct.price:''}</p>
                                <div className={styles.amount}>
                                    <span className={styles.change}>-</span>
                                    <span className={styles.num}>0</span>
                                    <span className={styles.change}>+</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.productPageCta}>
                            <button 
                            onClick={()=>handleAddToBag(+productID)}
                            className={styles.add}>Add to Bag</button>
                            <button className={styles.buy}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className={styles.relatedProducts}></div>
            </div>
        </div>
    )
}

export default ProductPage