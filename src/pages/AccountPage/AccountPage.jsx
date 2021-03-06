import React, { useState } from "react";
import Address from "../../components/Address/Address";
import Order from "../../components/Order/Order";

import styles from "./AccountPage.module.css";

import { useSelector } from "react-redux";

const AccountPage = () => {
  // -------GET STATE FROM CONTEXT-------\\

  const {
    user: { orders, deliveryAddresses },
  } = useSelector((state) => state);

  // ------STATE FOR ACCOUNT PAGE TABS------- \\

  const [activeAcct, setActiveAcct] = useState("order");

  return (
    <div className={styles.accountPage}>
      <div className={styles.accountTabs}>
        <div
          className={`${styles.category} ${
            activeAcct === "order" ? styles.active : ""
          }`}
          onClick={() => setActiveAcct("order")}
        >
          <p>My order</p>
        </div>
        <div
          className={`${styles.category} ${
            activeAcct === "address" ? styles.active : ""
          }`}
          onClick={() => setActiveAcct("address")}
        >
          <p>My addresses</p>
        </div>
      </div>

      <div className={styles.accountMain}>
        {activeAcct === "order" ? (
          <div className={styles.orderContainer}>
            <div className={styles.orderHeader}>
              <h2>Showing all orders</h2>
              <button>
                <i className="fas fa-sort"></i> Filters
              </button>
            </div>
            <div className={styles.accountList}>
              {orders.map((order) => (
                <Order
                  key={order.orderID}
                  orderId={order.orderID}
                  orderTime={order.orderTime}
                  orderItems={order.items}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.accountList}>
            {deliveryAddresses.map((address) => (
              <Address
                key={address.mobile}
                name={address.name}
                mobile={address.mobile}
                city={address.city}
                address={address.address}
              />
            ))}
            <div className={styles.emptyAddress}>
              <p>
                <i className="fas fa-plus"></i>Add New Address
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
