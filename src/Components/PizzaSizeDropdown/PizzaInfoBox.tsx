import "../sass/_h2.scss";
import "../sass/_paragraph.scss";
import "../sass/_paragraph.scss";
import "../sass/_InfoBox.scss";

type PizzaType = {
  name: string;
  size: string;
  slices: number;
  price: string;
};

const PizzaInfoBox = ({ name, size, slices, price }: PizzaType) => {
  return (
    <>
      <div className='info-box'>
        <h2>Du har valt: </h2>
        {/* får inte glömma och skapa en scss fil för h3*/}
        <p>
          <u>{name}</u> <br />
          Storlek: {size} <br />
          Slices: {slices} <br />
          Pris: {price}
        </p>
      </div>
    </>
  );
};
export default PizzaInfoBox;
