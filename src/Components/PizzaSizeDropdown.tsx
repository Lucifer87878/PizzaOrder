import "./_button.scss";

const PizzaSizeDropdown = () => {
  return (
    <>
      <label htmlFor='size-select'>Choose a size:</label>

      <select name='pizza' id='pizza-select'>
        <option value=''>--Please choose an option--</option>
      </select>
    </>
  );
};
export default PizzaSizeDropdown;
