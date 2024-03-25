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

  // selectedPizzaObj kollar med hjälp av find metoden om det finns en pizza med det valda namnet från dropdown menyn.
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
      {/* selectedpizzaobj kollar om vi har information om en pizza, har vi det så körs PizzainfoBox */}
      {selectedPizzaObj && (
        <>
          {/* PizzaInfoBox*/}
          <PizzaInfoBox
            name={selectedPizzaObj.name}
            ingredients={selectedPizzaObj.ingredients}
            price={selectedPizzaObj.price}
          />
          <ul>
            {/* Här loopar vi igenom ännu en array (ingredients) så att dessa renderas ut som list element*/}
            {selectedPizzaObj.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default PizzaSizeDropdown;
