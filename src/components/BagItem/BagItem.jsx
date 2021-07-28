import React from "react";

import styles from "./BagItem.module.css";

import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cart/cartActions";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleCount = e => {
    if (e.target.id === "decrease") {
      item.count === 1
        ? dispatch(removeFromCart(item))
        : dispatch(decreaseQuantity(item.id));
    } else {
      dispatch(increaseQuantity(item.id));
    }
  };

  return (
    <div className={styles.bagItem}>
      <p className={styles.itemName}>{item.title}</p>
      <p className={styles.piece}>Per piece</p>
      <p className={styles.itemPrice}>UGX {item.price}</p>

      <div className={styles.amount}>
        <span
          id='decrease'
          onClick={e => handleCount(e)}
          className={styles.change}>
          -
        </span>
        <span>{item.count}</span>
        <span
          id='increase'
          onClick={e => handleCount(e)}
          className={styles.change}>
          +
        </span>
      </div>
    </div>
  );
};

export default BagItem;
