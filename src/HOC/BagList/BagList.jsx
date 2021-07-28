import React from "react";

import EmptyBag from "../../components/EmptyBag/EmptyBag";
import BagItem from "..//../components/BagItem/BagItem";

import styles from "./BagList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../redux/cart/cartActions";

export default function BagList() {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  return (
    <div className={styles.bag}>
      <div className={styles.bagHeader}>
        <h3>Bag</h3>
        <span className={styles.number}>
          {cart.reduce((init, item) => init + item.count, 0)}
        </span>
      </div>
      <div className={styles.bagContainer}>
        <p
          onClick={() => dispatch(setCart([]))}
          className={`${styles.clear} ${cart.length === 0 ? styles.hide : ""}`}>
          Clear Bag
        </p>
        {cart.length > 0 ? (
          cart.map(item => <BagItem key={item.id} item={item} />)
        ) : cart.length === 0 ? (
          <EmptyBag />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
