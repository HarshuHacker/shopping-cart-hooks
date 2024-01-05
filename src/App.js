import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import itemsContext from "./contexts/itemContext";
import totalContext from "./contexts/totalContext";

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <itemsContext.Provider value={{ item, setItem }}>
        <totalContext.Provider value={{ total, setTotal }}>
          <Navbar />
          <Items />
        </totalContext.Provider>
      </itemsContext.Provider>
    </div>
  );
}
export default App;
