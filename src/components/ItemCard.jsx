import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import itemsContext from "../contexts/itemContext";
import totalContext from "../contexts/totalContext";

function ItemCard({ name, price }) {
  const { item, setItem } = useContext(itemsContext);
  const { total, setTotal } = useContext(totalContext);
  const handleAdd = () => {
    setItem(item + 1);
    setTotal((prevState) => prevState + price);
  };

  const handleRemove = () => {
    if (total - price >= 0) {
      setItem((prevState) => prevState - 1);
      setTotal((prevState) => prevState - price);
    }
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
