import React, { useState } from "react";
import Pizzas from "../Data/pizzaSizes.json";
import PizzaInfoBox from "./PizzaInfoBox";
import Button from "../Button"; // Importera din Button-komponent
import Cart from "../Cart/Cart";

const PizzaSizeDropdown = () => {
  const [pizza, setPizza] = useState<string>("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const calculateTotalPrice = (): number => {
    // Beräkna totalpriset baserat på pizzapriset och tillvalspriserna
    const selectedPizzaObj = Pizzas.find((pizzaObj) => pizzaObj.name === pizza);
    let totalPrice = selectedPizzaObj ? selectedPizzaObj.price : 0;

    selectedIngredients.forEach((ingredient) => {
      // Tilläggskostnaden för varje tillval (10 kr per tillval)
      totalPrice += 10;
    });

    return totalPrice;
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPizza(event.target.value);
    setSelectedIngredients([]);
  };

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ingredient = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient)
      );
    }
  };

  const handleCheckout = () => {
    const cartItem = {
      pizza: pizza,
      ingredients: selectedIngredients,
      price: calculateTotalPrice(), // Beräkna totalpriset
    };
    setCartItems([...cartItems, cartItem]);
    setPizza("");
    setSelectedIngredients([]);
  };

  const handlePayment = () => {
    // Töm korgen när användaren betalar
    setCartItems([]);
    setPizza("");
    setSelectedIngredients([]);
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
          <p className='TP-P1'>🍕Total Price: {calculateTotalPrice()} kr</p>
          {/* Använd din Button-komponent för att visa Checkout-knappen */}
          <Button onClick={handleCheckout} text='Checkout' />
          {/* Ny knapp för att betala */}
          {cartItems.length > 0 && (
            <Button onClick={handlePayment} text='Pay' />
          )}
        </>
      )}

      <Cart items={cartItems} />
    </>
  );
};

export default PizzaSizeDropdown;
