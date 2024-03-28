import { useState } from "react";
import "../sass/_Checkbox.scss";

//Interface checkbox för att event inte skulle ha type any!
interface checkboxProps {}

const Checkbox: React.FC<checkboxProps> = () => {
  const [checkboxes, setCheckboxes] = useState({
    ost: false,
    kött: false,
    sås: false,
    lök: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
    console.log("checkbox clicked:", name);
  };
  return (
    <>
      <section className='Checkboxes'>
        <div> 
          <h1>Extra +15 kr</h1>
          <input
            type='checkbox'
            name='ost'
            checked={checkboxes.ost}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='ost'>Fetaost</label>
        </div>
        <div>
          <input
            type='checkbox'
            name='kött'
            checked={checkboxes.kött}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='kött'>Kött</label>
        </div>
        <div>
          <input
            type='checkbox'
            name='sås'
            checked={checkboxes.sås}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='sås'>Sås</label>
        </div>
        <div>
          <input
            type='checkbox'
            name='lök'
            checked={checkboxes.lök}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='lök'>Lök</label>
        </div>
      </section>
    </>
  );
};
export default Checkbox;
