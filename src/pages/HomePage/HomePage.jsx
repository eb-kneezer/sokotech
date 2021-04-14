import React, {useContext, useState} from 'react'
import BagList from '../../HOC/BagList/BagList'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import { MarketContext } from '../../context'


import styles from './HomePage.module.css'

const HomePage = () => {
    
    
    const {allProducts} = useContext(MarketContext);
    const [products] = allProducts;

    const [search, setSearch] = useState('')
    const [activeCat, setActiveCat] = useState({category: 'All', count: products.length})
    
    const filteredProducts = products
    .filter(product => {
        if (activeCat.category === 'All'){
            return product
        } else {
            return product.category === activeCat.category}})
    .filter(product => product.title.toLowerCase().includes(search.toLowerCase()));


    const allCategories = [{category: 'All', count: products.length}];

    products.forEach(product => {
        if (!allCategories.some(item => item.category === product.category)) {
            allCategories.unshift({category: product.category, count: product.count})
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
                        <input 
                        placeholder="Search for products..." 
                        type="search" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <div className={styles.productHeader}>
                        <h3>{activeCat.category}</h3>
                        <span className={styles.number}>{activeCat.count}</span>
                    </div>
                    <div className={styles.productsContainer}>
                        {
                            filteredProducts.length > 0 ?
                            filteredProducts.map(product => (
                                <Product 
                                key={product.id} 
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                 />

                            )) 
                            :
                            'no products'
                        }
                    </div>
                </div>
                <div className={styles.bagListContainer}>
                <BagList />

                </div>
            </div>
        </div>
    )
}

export default HomePage