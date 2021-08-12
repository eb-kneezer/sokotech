import React from "react";

import styles from "./OrderItem.module.css";

export default function OrderItem({ count, title, image, price }) {
  return (
    <div className={styles.orderItem}>
      <div className={styles.itemImg}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.itemDetails}>
        <div>
          <p className={styles.itemName}>{title}</p>
        </div>
        <span className={styles.itemCount}>{`X${count}`}</span>
        <span className={styles.itemPrice}>{`NGN ${price}`}</span>
      </div>
    </div>
  );
}
