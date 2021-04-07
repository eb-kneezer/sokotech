import React, {useState} from 'react'

import styles from './Category.module.css'

export default function Category({cat, active}) {

const {category} = active;
const [activeCat, setActiveCat] = category;

// const [active, setActive] = useState(false)


    return (
        <div
        className={`${styles.category} ${activeCat.category === cat.category ? styles.active : ''}`}
        onClick={()=> setActiveCat({category: cat.category, count: cat.count})}>
            <p>{cat.category} ({cat.count})</p>
        </div>
    )
}


// return (
//     <div
//     className={`${styles.category} ${active ? styles.active : ''}`}
//     onClick={()=> setActive(!active)}>
//         <p>{cat.category} ({cat.count})</p>
//     </div>
// )