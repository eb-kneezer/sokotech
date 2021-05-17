import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Product.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

const Product = ({ id, title, image, price }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  const history = useHistory();

  const product = products.filter((item) => item.id === id);

  return (
    <div
      id="prodcon"
      onClick={(e) => {
        if (e.target.id !== "add") {
          history.push(`/product/${id}`);
        }
      }}
      className={styles.singleProduct}
    >
      <div className={styles.productImg}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productName}>{title}</p>
        <p className={styles.productPrice}>{`UGX ${price}`}</p>
        <button
          id="add"
          onClick={() => dispatch(addToCart(product[0]))}
          className={styles.addBtn}
        >
          <i className="fas fa-plus"></i>Add
        </button>
      </div>
    </div>
  );
};

export default Product;
