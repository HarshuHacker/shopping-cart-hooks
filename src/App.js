import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomItemContext from "./contexts/itemContext";

function App() {
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <CustomItemContext >
        <Navbar />
        <Items />
      </CustomItemContext>
    </div>
  );
}
export default App;
