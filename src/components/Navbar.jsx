import React from "react";
import styles from "../styles/Total.module.css";
import { useContextValue } from "../contexts/itemContext";

function Navbar() {
  const { item, total, handleReset, handleCart } = useContextValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={handleCart}>
          Cart
        </button>
        <button className={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
