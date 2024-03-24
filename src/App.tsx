import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button";
import PizzaSizeDropdown from "./Components/PizzaSizeDropdown/PizzaSizeDropdown";
import Topping from "./Components/Additionmenu/Additionmenu";
import Additionmenu from "./Components/Additionmenu/Additionmenu";

function App() {
  return (
    <>
      <Header />
      <PizzaSizeDropdown />
      {/* <Button /> */}
      <Additionmenu />
    </>
  );
}

export default App;
