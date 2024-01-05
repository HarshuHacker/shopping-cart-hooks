import { createContext, useContext, useState } from "react";

const itemsContext = createContext();

export const useContextValue = () => {
  const contextValue = useContext(itemsContext);
  return contextValue;
};

const CustomItemContext = (props) => {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = (price) => {
    setItem(item + 1);
    setTotal((prevState) => prevState + price);
  };

  const handleRemove = (price) => {
    if (total - price >= 0) {
      setItem((prevState) => prevState - 1);
      setTotal((prevState) => prevState - price);
    }
  };

  return (
    <itemsContext.Provider
      value={{ item, setItem, total, setTotal, handleAdd, handleRemove }}
    >
      {props.children}
    </itemsContext.Provider>
  );
};

export { itemsContext };
export default CustomItemContext;
