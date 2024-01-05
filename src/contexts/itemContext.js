import { createContext, useContext, useEffect, useState } from "react";
import CartModal from "../components/CartModal";

const itemsContext = createContext();

export const useContextValue = () => {
  const contextValue = useContext(itemsContext);
  return contextValue;
};

const CustomItemContext = (props) => {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart, total, item, showCart);
  }, [cart]);

  const handleAdd = (product) => {
    const index = cart.findIndex((prod) => prod.id === product.id);
    if (index === -1) {
      setCart([{ ...product, qty: 1 }, ...cart]);
    } else {
      const newCart = cart.map((prod, i) => {
        if (index === i) {
          return { ...prod, qty: prod.qty + 1 };
        }
        return prod;
      });
      setCart(newCart);
    }
    setTotal((prevState) => prevState + product.price)
    setItem((prevState) => prevState + 1)
  };

  const handleRemove = (price) => {
    if (total - price >= 0) {
      setItem((prevState) => prevState - 1);
      setTotal((prevState) => prevState - price);
    }
  };

  const handleCart = () => {
    setShowCart((prevState) => !prevState);
  };

  const handleReset = () => {
    setItem(0);
    setTotal(0);
  };

  return (
    <itemsContext.Provider
      value={{
        item,
        setItem,
        total,
        setTotal,
        handleAdd,
        handleRemove,
        handleReset,
        handleCart,
        cart,
        showCart,
        setShowCart,
      }}
    >
      {showCart && <CartModal />}
      {props.children}
    </itemsContext.Provider>
  );
};

export { itemsContext };
export default CustomItemContext;
