import React from "react";
import styles from "../styles/CartModal.module.css";
import { useContextValue } from "../contexts/itemContext";

function CartModal() {
  const { handleCart, handleReset, cart, total } = useContextValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={handleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={handleReset}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((prod) => (
          <div key={prod.id} className={styles.cartCard}>
            <h1>{prod.name}</h1>
            <h3>x{prod.qty}</h3>
            <h3>{prod.price}</h3>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>&#x20B9; {total}</div>
      </div>
    </div>
  );
}

export default CartModal;
