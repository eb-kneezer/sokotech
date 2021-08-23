import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Address.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectAddress } from "../../redux/user/userActions";

export default function Address({ name, mobile, city, address }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);

  const page = useHistory();

  return (
    <div
      onClick={() => dispatch(selectAddress(address))}
      className={`${styles.address} ${
        user.selectedAddress === address ? styles.selected : ""
      }`}>
      <span className={styles.check}>
        <i className='fas fa-check'></i>
      </span>
      <h3>{name}</h3>
      <p>{`${address}, ${city}`}</p>
      <p className={styles.phone}>{mobile}</p>

      {page.location.pathname === "/account" ? (
        <>
          <span className={styles.edit}>Edit</span>
          <span className={styles.delete}>Delete</span>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
