import { useState } from "react";
import Pizzas from "../Data/pizzaSizes.json";
import PizzaInfoBox from "./PizzaInfoBox";

const PizzaSizeDropdown = () => {
  const [pizza, setPizza] = useState("");

  const handleChange = (event: { target: { value: any } }) => {
    const selectedPizza = event.target.value; // hämtar värdet från det som klickades på
    setPizza(selectedPizza); // uppdaterar pizza state med värdet av den valda pizzan
    console.log("Jag klicka på:", selectedPizza);
  };

  // En find metod för att söka efter den pizzan och om den matchar the som klickats på
  const selectedPizzaObj = Pizzas.find((pizzaObj) => pizzaObj.name === pizza);

  return (
    <>
      <label htmlFor='size-select'>Choose a pizza size:</label>

      <select
        name='pizza'
        id='pizza-select'
        value={pizza}
        onChange={handleChange}
      >
        <option value=''>--Please choose an option--</option>
        {Pizzas.map((pizza, index) => (
          <option key={index} value={pizza.name}>
            {pizza.name}
          </option>
        ))}
      </select>
      {/*Vi displayar om en "PizzaInfoBox" "OM" en vald pizza objekt existerar */}
      {selectedPizzaObj?.ingredients.map((i) => {
        <option value=''>{i}</option>;
      }) && (
        <PizzaInfoBox
          name={selectedPizzaObj.name}
          ingredients={selectedPizzaObj.ingredients}
          price={selectedPizzaObj.price}
        />
      )}
    </>
  );
};
export default PizzaSizeDropdown;
