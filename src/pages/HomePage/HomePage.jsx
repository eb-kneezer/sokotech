import React, {useContext, useState} from 'react'
import BagItem from '../../components/BagItem/BagItem'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import { MarketContext } from '../../context'


import styles from './HomePage.module.css'

const HomePage = () => {

    
    
    const {allProducts, cart} = useContext(MarketContext);
    const [products] = allProducts;
    const [bag, setBag] = cart;

    
    const [activeCat, setActiveCat] = useState({category: 'All', count: products.length})
    
    const filteredProducts = products.filter(product => product.category === activeCat.category)

    const allCategories = [{category: 'All', count: products.length}];

    products.forEach(product => {
        if (!allCategories.some(item => item.category === product.category)) {
            allCategories.unshift({category: product.category, count: 1})
        } else {
            const index = allCategories.findIndex(item => item.category === product.category)
            allCategories[index].count += 1;
        }
    })


    return (
        <div className={styles.homepage}>
            <div className={styles.container}>

                <div className={styles.productsCategory}>
                        {
                            allCategories.map((cat, index) => (
                                <Category 
                                key={index} 
                                cat={cat} 
                                active={{category: [activeCat, setActiveCat]}}/>
                            ))
                        }
                </div>

                <div className={styles.products}>
                    <div className={styles.searchProducts}>
                        <input placeholder="Search for products..." type="search" name="" id=""/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <div className={styles.productHeader}>
                        <h3>{activeCat.category}</h3>
                        <span className={styles.number}>{activeCat.count}</span>
                    </div>
                    <div className={styles.productsContainer}>
                        {
                            products.length > 0  && activeCat.category === 'All' ? 
                            products.map(product => (
                                <Product 
                                key={product.id} 
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price} />

                            )) :
                            activeCat !== "All" ?
                            filteredProducts.map(product => (
                                <Product 
                                key={product.id} 
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price} />

                            )) :
                            'omooo'
                        }
                    </div>
                </div>

                <div className={styles.bag}>
                    <div className={styles.bagHeader}>
                        <h3>Bag</h3>
                        <span className={styles.number}>{bag.length}</span>
                    </div>
                    <div className={styles.bagContainer}>
                        <p 
                        onClick={() => setBag([])}
                        className={`${styles.clear} ${bag.length === 0 ? styles.hide : ''}`}>Clear Bag</p>
                        {
                            bag.length > 0 ? 
                            bag.map(item => <BagItem 
                                key={item.id} 
                                name={item.title}
                                price={item.price}
                                count={item.count} />)
                                 :
                                ""
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage