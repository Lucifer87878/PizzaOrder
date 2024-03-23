type PizzaType = {
  name: string;
  size: string;
  slices: number;
  price: string;
};

const PizzaInfoBox = ({ name, size, slices, price }: PizzaType) => {
  return (
    <>
      <div>
        <h2>Du har valt: </h2>
        {/* får inte glömma och skapa en scss fil för h3*/}
        <p>
          Pizza: {name}, Storlek: {size}, Bitar: {slices}, Pris: {price},
        </p>
      </div>
    </>
  );
};
export default PizzaInfoBox;
