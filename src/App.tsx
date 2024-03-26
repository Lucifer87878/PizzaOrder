import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button";
import PizzaSizeDropdown from "./Components/PizzaSizeDropdown/PizzaSizeDropdown";
import Topping from "./Components/Checkbox/Checkbox";
import Checkbox from "./Components/Checkbox/Checkbox";
import NavBar from "./Components/Navbar/Navbar";
import ToppingsDropdown from "./Components/PizzaSizeDropdown/ToppingsDropdown";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ToppingsDropdown />
      <PizzaSizeDropdown />

      <Button />
      <Checkbox />
    </>
  );
}

export default App;
