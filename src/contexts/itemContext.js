import { createContext, useState } from "react";

const itemsContext = createContext();

const CustomItemContext = (props) => {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <itemsContext.Provider value={{ item, setItem, total, setTotal }}>
      {props.children}
    </itemsContext.Provider>
  );
};

export {itemsContext};
export default CustomItemContext;
