import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button";
import PizzaSizeDropdown from "./Components/PizzaSizeDropdown/PizzaSizeDropdown";
import NavBar from "./Components/Navbar/Navbar";

//--- Lämnar kvar dom i fall vi ändrar oss längre fram ----//

// import { useState } from "react";
// import Topping from "./Components/Checkbox/Checkbox";
// import Checkbox from "./Components/Checkbox/Checkbox";
// import ToppingsDropdown from "./Components/PizzaSizeDropdown/ToppingsDropdown";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      {/* <ToppingsDropdown /> */}
      <PizzaSizeDropdown />

      <Button />
      {/* <Checkbox /> */}
    </>
  );
}

export default App;
