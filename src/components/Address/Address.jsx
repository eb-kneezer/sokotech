import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { MarketContext } from '../../context'


import styles from './Address.module.css'

export default function Address({name, mobile, city, address}) {

    const page = useHistory()
    const {account} = useContext(MarketContext)
    const [user, setUser] = account;
    

    const handleSelectAddress = () => {

        setUser({...user, selectedAddress: mobile})

        // setActiveForm('payment')

        // let listOfAddress = user.deliveryAddress.map(add => {
        //     if (add.mobile === mobile) {
        //         return {name, mobile, city, address, selected: !selected}
        //     } else {
        //         return add
        //     }
        // })

        // console.log(listOfAddress[0].selected)

        // setUser({...user, deliveryAddress: [...listOfAddress]})
    }

    return (
        <div 
        onClick={() => handleSelectAddress()}
        className={`${styles.address} ${user.selectedAddress === mobile ? styles.selected : ''}`}>
            <span className={styles.check}><i className="fas fa-check"></i></span>
            <h3>{name}</h3>
            <p>{`${address}, ${city}`}</p>
            <p className={styles.phone}>{mobile}</p>

            {
                page.location.pathname === '/account' ? 
                <>
                <span className={styles.edit}>Edit</span>
                <span className={styles.delete}>Delete</span>
                </> : ''
            }
        </div>
    )
}
