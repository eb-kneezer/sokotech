import React, {createContext, useState, useEffect} from 'react'

export const MarketContext = createContext(null);


export const MarketContextProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [bag, setBag] = useState([])
    const [user, setUser] = useState({
        isLoggedIn: false,
        account: null,
        deliveryAddress: [],
        paymentMethod: {
            onDelivery: false,
            online: true
        }
    })

    const handleAddToBag = (id) => {
        products.forEach(product => {
            if (product.id === id) {
                setBag([...bag, {...product, count: 1}])
            } 
        })
    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    }, [])

    return (
        <MarketContext.Provider value={{
            allProducts: [products],
            cart: [bag, setBag],
            account: [user, setUser],
            handleAddToBag
        }}>
            {children}
        </MarketContext.Provider>
    )
}
