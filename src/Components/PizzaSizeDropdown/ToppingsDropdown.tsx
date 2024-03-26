import React from "react";
import "../sass/_buttons.scss";

export default function ToppingsDropdown() {
  return (
    <>
      <label htmlFor='topping-select'>Choose a topping:</label>

      <select name='toppings' id='topping-select'>
        <option value=''>--Please choose an option--</option>
      </select>
    </>
  );
}
