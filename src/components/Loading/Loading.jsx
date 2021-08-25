import React from "react";
import styles from "./Loading.module.css";
function Loading() {
  return (
    <div className={styles.loadingProduct}>
      <div className={styles.loadingImg}></div>
      <div className={styles.loadingDetails}>
        <p></p>
        <p></p>
        <div className={styles.loadingBtn}></div>
      </div>
    </div>
  );
}

export default Loading;
