import "../sass/_Cart.scss";

const Cart = ({ items }: { items: any[] }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  return (
    <div className='cart'>
      <h2>🍕Cart🛒🍕</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <strong>{item.pizza}</strong> - {item.price} kr
            </div>
            <ul>
              {item.ingredients.map((ingredient: string, idx: number) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {/* Rendera separat totalpris i varukorgen */}
      <p>Total Price in Cart: {calculateTotalPrice()} 💰🍕</p>
    </div>
  );
};

export default Cart;
