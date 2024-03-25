import "../sass/_h2.scss";
import "../sass/_paragraph.scss";
import "../sass/_paragraph.scss";
import "../sass/_InfoBox.scss";
import { ReactNode } from "react";
import "../Data/pizzaSizes.json";

type PizzaType = {
  name: string;
  ingredients: ReactNode;
  price: string;
};

const PizzaInfoBox = ({ name, price, ingredients }: PizzaType) => {
  return (
    <>
      <div className='info-box'>
        <h2>Du har valt: </h2>
        {/* får inte glömma och skapa en scss fil för h3*/}
        <u>{name}</u> <br />
        <div>
          Pris: {price} <button>+</button>
          <button>-</button>
          <br />
        </div>
        <div className='ingredient.array'>
          <ul>
            Ingredienser: <li>{ingredients}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default PizzaInfoBox;
