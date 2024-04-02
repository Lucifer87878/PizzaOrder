import React, { useState } from "react";
import Pizzas from "../Data/pizzaSizes.json";
import PizzaInfoBox from "./PizzaInfoBox";

const PizzaSizeDropdown = () => {
  const [pizza, setPizza] = useState<string>(""); // Specifiera typen för pizza som string
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]); // Specifiera typen för selectedIngredients som string-array
  const [totalPrice, setTotalPrice] = useState<number>(0); // Specifiera typen för totalPrice som number

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPizza = event.target.value;
    setPizza(selectedPizza);
    setSelectedIngredients([]); // reset selected ingredients when pizza changes from menu
    setTotalPrice(0); // reset total topping price when pizza changes
  };

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // hantering av tillägg som event
    const ingredient = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
      setTotalPrice(totalPrice + 10); // Lägg till 10 kr till totalpriset när ingrediensen väljs
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient)
      );
      setTotalPrice(totalPrice - 10); // Dra av 10 kr från totalpriset när ingrediensen avmarkeras
    }
  };

  const selectedPizzaObj = Pizzas.find((pizzaObj) => pizzaObj.name === pizza);

  return (
    <>
      <label htmlFor='size-select'>Choose a pizza size:</label>
      <select
        className='Drop-D1'
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

      {selectedPizzaObj && (
        <>
          <PizzaInfoBox
            name={selectedPizzaObj.name}
            price={selectedPizzaObj.price}
          />
          {/* Rendera ingredienser som checkboxes */}
          <div className='check-Box'>
            {selectedPizzaObj.ingredients.map((ingredient, index) => (
              <div key={index}>
                <input
                  className='check-Box'
                  type='checkbox'
                  id={`ingredient-${index}`}
                  name='ingredient'
                  value={ingredient}
                  checked={selectedIngredients.includes(ingredient)}
                  onChange={handleIngredientChange}
                />
                <label htmlFor={`ingredient-${index}`}>
                  {ingredient} 10 kr
                </label>
              </div>
            ))}
          </div>
          <p className='TP-P1'>🍕Topping's Price: {totalPrice} kr</p>
        </>
      )}
    </>
  );
};

export default PizzaSizeDropdown;
