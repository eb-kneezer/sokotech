import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Product.module.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import { addComma } from "../../App";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, image, price } = product;

  const history = useHistory();

  return (
    <div
      id='prodcon'
      onClick={e => {
        if (e.target.id !== "add") {
          history.push(`/product/${id}`);
        }
      }}
      className={styles.singleProduct}>
      <div className={styles.productImg}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productName}>{title}</p>
        <p className={styles.productPrice}>{`NGN ${addComma(price)}`}</p>
        <button
          id='add'
          onClick={() => dispatch(addToCart(product))}
          className={styles.addBtn}>
          <i className='fas fa-plus'></i>Add
        </button>
      </div>
    </div>
  );
};

export default Product;
