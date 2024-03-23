import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button";
import PizzaSizeDropdown from "./Components/PizzaSizeDropdown/PizzaSizeDropdown";
import Topping from "./Components/Topping.tsx/Topping";

function App() {
  return (
    <>
      <Header />
      <PizzaSizeDropdown />
      {/* <Button /> */}
      <Topping />
    </>
  );
}

export default App;
