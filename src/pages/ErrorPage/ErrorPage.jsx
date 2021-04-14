import React from 'react'

import styles from './ErrorPage.module.css'

import err from '../../assets/error.jpg'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className={styles.errorPage}>
            <div className={styles.errorText}>
                <p>In cases like this, wouldn't you rather go back home?</p>
                <Link to='/'>
                    <button>Go Home</button>
                </Link>
            </div>
            <div className={styles.errorImg}>
                <img src={err} alt=""/>
            </div>
        </div>
    )
}
