import React from 'react'
import EmptyBag from '../../components/EmptyBag/EmptyBag'
import Successful from '../../components/Successful/Successful'

import styles from './BagPage.module.css'

const BagPage = () => {
    return (
        <div className={styles.bagPage}>
            {/* <EmptyBag/> */}
            <Successful />
        </div>
    )
}

export default BagPage