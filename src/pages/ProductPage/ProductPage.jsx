import React from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./ProductPage.module.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  removeFromCart,
  decreaseQuantity,
} from "../../redux/cart/cartActions";

const ProductPage = () => {
  // ------GET DATA FROM STORE------- \\
  const dispatch = useDispatch();
  const { cart, products } = useSelector(state => state);

  // ------GET PRODUCT FROM URL ID-------- \\

  const { productID } = useParams();
  const pageProduct = products.find(item => ({ ...item }.id === +productID));

  const pageProductInCart = cart.find(item => item.id === pageProduct.id);
  // -------GET RELATED PRODUCTS-------\\

  const relatedProducts = products.filter(
    product =>
      pageProduct.category === product.category && pageProduct.id !== product.id
  );

  // -------TRUNCATE RELATED PRODUCTS DESC.-------\\

  const truncate = input =>
    input.length > 20 ? `${input.substring(0, 40)}...` : input;

  // -------CASE: PRODUCT ID NOT FOUND ---------\\

  if (!pageProduct) {
    return (
      <div className={styles.notFound}>
        <h1>Please wait...</h1>
        <p>if this takes too long please go back home</p>
        <Link to='/'>Go Home</Link>
      </div>
    );
  }

  const handleCount = e => {
    if (e.target.id === "decrease") {
      if (pageProductInCart) {
        pageProductInCart.count === 1
          ? dispatch(removeFromCart(pageProduct))
          : dispatch(decreaseQuantity(pageProductInCart.id));
      }
    } else if (e.target.id === "increase" && pageProductInCart) {
      dispatch(increaseQuantity(pageProductInCart.id));
    } else {
      dispatch(addToCart(pageProduct));
    }
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <img src={products.length > 0 ? pageProduct.image : ""} alt='' />
          </div>
          <div className={styles.productInfo}>
            <div>
              <h3 style={{ fontSize: "18px" }}>
                {products.length > 0 ? pageProduct.title : ""}
              </h3>
              <p className={styles.productDescription}>
                {products.length > 0 ? pageProduct.description : ""}
              </p>
              <div className={styles.productPrice}>
                <p>UGX {products.length > 0 ? pageProduct.price : ""}</p>
                <div className={styles.amount}>
                  <span
                    id='decrease'
                    onClick={e => handleCount(e)}
                    className={styles.change}>
                    -
                  </span>
                  <span>
                    {pageProductInCart ? pageProductInCart.count : "1"}
                  </span>
                  <span
                    id='increase'
                    onClick={e => handleCount(e)}
                    className={styles.change}>
                    +
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.productPageCta}>
              <button
                onClick={() => dispatch(addToCart(pageProduct))}
                className={styles.add}>
                Add to Bag
              </button>
              <Link onClick={() => dispatch(addToCart(pageProduct))} to='/bag'>
                <button className={styles.buy}>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.relatedProducts}>
          <p className={styles.relatedHeader}>RELATED PRODUCTS</p>
          <div className={styles.relatedContent}>
            {relatedProducts.map(item => (
              <div className={styles.singleRelated} key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <div className={styles.relatedImg}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className={styles.relatedName}>
                    <p>{truncate(item.title)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
