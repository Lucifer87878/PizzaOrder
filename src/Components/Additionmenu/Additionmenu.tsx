// Topping componenten!
// Skulle vi ha en dropdown eller checkbox? jag röstar på checkbox för då, tar
// vi med det också som vi lärt oss på lektionen.

const Additionmenu = () => {
  return (
    <>
      <div>
        <input type='checkbox' />
        <label htmlFor='Extra Ost'>Extra Fetaost</label>
      </div>
      <div>
        <input type='checkbox' />
        <label htmlFor='Extra Ost'>Extra Kött</label>
      </div>
      <div>
        <input type='checkbox' />
        <label htmlFor='Extra Ost'>Extra sås</label>
      </div>
      <div>
        <input type='checkbox' />
        <label htmlFor='Extra Ost'>Extra Lök</label>
      </div>
    </>
  );
};
export default Additionmenu;
