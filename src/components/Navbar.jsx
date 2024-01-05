import React, { useContext } from "react";
import styles from "../styles/Total.module.css";
import itemsContext from "../contexts/itemContext";

function Navbar() {
  const { item, total } = useContext(itemsContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
