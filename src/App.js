import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import itemsContext from "./contexts/itemContext";

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <itemsContext.Provider value={{ item, setItem, total, setTotal }}>
        <Navbar />
        <Items />
      </itemsContext.Provider>
    </div>
  );
}
export default App;
