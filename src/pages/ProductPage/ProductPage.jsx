import React, {useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import { MarketContext } from '../../context'

import styles from './ProductPage.module.css'

const ProductPage = () => {

    // ------GET DATA FROM CONTEXT------- \\

    const {allProducts, cart, handleAddToBag} = useContext(MarketContext)
    const [products] = allProducts
    const [bag, setBag] = cart;
    
    // ------GET PRODUCT FROM URL ID-------- \\

    const {productID} = useParams()
    const pageProduct = products.find(item => item.id === (+productID));

    // -------GET RELATED PRODUCTS-------\\

    const relatedProducts = products.filter(product => pageProduct.category === product.category && pageProduct.id !== product.id)
    
    // -------TRUNCATE RELATED PRODUCTS DESC.-------\\
    
    const truncate = (input) => input.length > 20 ? `${input.substring(0, 40)}...` : input;

    // -------CASE: PRODUCT ID NOT FOUND ---------\\

    if (!pageProduct) {
        return (
            <div className={styles.notFound}>
                <h1>Please wait...</h1>
                <p>if this takes too long please go back home</p>
                <Link to="/">
                Go Home
                </Link>
            </div>
        )
    }    

    const handleCount = (e) => {
        let updatedCount = bag.map(i => {
            if (i.id === pageProduct.id) {
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
                                    <span
                                    id="decrease"
                                    onClick={handleCount} 
                                    className={styles.change}>-</span>
                                    <span>{products.length > 0 ? pageProduct.count : ''}</span>
                                    <span
                                    id="increase"
                                    onClick={(e) => handleCount(e)}
                                    className={styles.change}>+</span>
                                </div>
                                
                            </div>
                        </div>

                        <div className={styles.productPageCta}>
                            <button 
                            onClick={()=>handleAddToBag(+productID)}
                            className={styles.add}>Add to Bag</button>
                            <Link onClick={() => handleAddToBag(+productID)} to='/bag'>
                                <button className={styles.buy}>Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className={styles.relatedProducts}>
                    <p className={styles.relatedHeader}>RELATED PRODUCTS</p>
                    <div className={styles.relatedContent}>
                        {
                            relatedProducts.map(item => (

                             <div className={styles.singleRelated}>
                                 <div className={styles.relatedImg}>
                                     <img src={item.image} alt={item.title}/>
                                 </div>
                                 <div className={styles.relatedName}>
                                     <p>{truncate(item.title)}</p>
                                 </div>
                             </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;