import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button";
import PizzaSizeDropdown from "./Components/PizzaSizeDropdown";

function App() {
  return (
    <>
      <Header />
      <PizzaSizeDropdown />
      {/* <Button /> */}
    </>
  );
}

export default App;
