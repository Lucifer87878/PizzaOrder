import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button";
import PizzaSizeDropdown from "./Components/PizzaSizeDropdown/PizzaSizeDropdown";
import Topping from "./Components/Checkbox/Checkbox";
import Checkbox from "./Components/Checkbox/Checkbox";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <PizzaSizeDropdown />
      <Button />
      <Checkbox />
    </>
  );
}

export default App;
