import React from "react";

import yayImg from "../../assets/yayy.png";
import { Link } from "react-router-dom";

import styles from "./Successful.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../redux/activeTab/tabActions";

export default function Successful() {
  //-----GET STATE FROM CONTEXT----- \\

  const dispatch = useDispatch();
  const {
    user: { orders },
  } = useSelector((state) => state);

  return (
    <div className={styles.successfulWrapper}>
      <div className={styles.successful}>
        <img src={yayImg} alt="party popper" />
        <h3>
          Thank you! <br /> Your order has been placed successfully
        </h3>
        <p>
          you will recieve a confirmation message as soon as the order is
          accepted
        </p>
        <p>
          Order Id: <span>{`${orders[orders.length - 1].orderID}`}</span>{" "}
        </p>

        <div className={styles.successCta}>
          <Link
            onClick={() => dispatch(setActiveTab(""))}
            to={`/trackorder/${orders[orders.length - 1].orderID}`}
          >
            <button className={styles.track}>Track Order</button>
          </Link>
          <Link onClick={() => dispatch(setActiveTab(""))} to="./">
            <button className={styles.goHome}>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
