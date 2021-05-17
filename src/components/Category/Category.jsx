import React from "react";

import styles from "./Category.module.css";

export default function Category({ cat, active }) {
  const { category } = active;
  const [activeCat, setActiveCat] = category;

  return (
    <div
      className={`${styles.category} ${
        activeCat.category === cat.category ? styles.active : ""
      }`}
      onClick={() => setActiveCat({ category: cat.category, count: cat.count })}
    >
      <p>
        {cat.category} ({cat.count})
      </p>
    </div>
  );
}
