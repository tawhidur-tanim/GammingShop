import { useState } from "react";
import ExapandableText from "./Components/ExapandableText";
import Form from "./Components/Form";
import ProductList from "./Components/ProductList";
import StateManagement from "./Components/StateManagement";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.currentTarget.value)}
      >
        <option value="Clothing">Clothing</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Electronics">Electronics</option>
      </select>

      <ProductList category={category}></ProductList>
    </>
  );
}

export default App;
