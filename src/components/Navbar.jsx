import React, { useContext } from "react";
import styles from "../styles/Total.module.css";
import itemsContext from "../contexts/itemContext";
import totalContext from "../contexts/totalContext";

function Navbar() {
  const { item } = useContext(itemsContext);
  const { total } = useContext(totalContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
