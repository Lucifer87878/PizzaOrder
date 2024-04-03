import "../sass/_h2.scss";
import "../sass/_paragraph.scss";
import "../sass/_InfoBox.scss";

type PizzaType = {
  name: string;
  price: number;
};

const PizzaInfoBox = ({ name, price }: PizzaType) => {
  return (
    <>
      <div className='info-box'>
        <h2>Du har valt:</h2>
        <p>{name}</p>
        <p>Pris: {price} Kr</p>
      </div>
    </>
  );
};
export default PizzaInfoBox;
