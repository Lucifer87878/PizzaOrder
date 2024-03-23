import "./sass/_buttons.scss";
import Pizzas from "./Data/pizzaSizes.json";

const PizzaSizeDropdown = () => {
  return (
    <>
      <label htmlFor='size-select'>Choose a pizza size:</label>

      <select name='pizza' id='pizza-select'>
        <option value=''>--Please choose an option--</option>
        {Pizzas.map((pizza, index) => (
          <option key={index} value={pizza.size}>
            {pizza.size}
          </option>
        ))}
      </select>
    </>
  );
};
export default PizzaSizeDropdown;
