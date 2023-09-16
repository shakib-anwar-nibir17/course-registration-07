import PropTypes from "prop-types";
const Cart = ({ selectedCards, addedCredit, remainingCredit }) => {
  return (
    <div className="bg-white mb-10 p-5 rounded-lg">
      <h3 className="text-[#2F80ED] font-bold text-xl mb-3">
        Credit Remaining {remainingCredit} hr
      </h3>
      <hr className="border-1 mb-3" />
      <h3 className="font-bold text-xl mb-3">Course Name:</h3>
      <div>
        <ol className="list-decimal p-5">
          {selectedCards.map((card) => (
            <li key={card.id}>{card.title}</li>
          ))}
        </ol>
      </div>
      <hr className="border-1 mb-3" />
      <h3 className=" text-xl mb-3">Total Credit Hour : {addedCredit}</h3>
      <hr className="border-1 mb-3" />
      <h3 className="text-xl mb-3">
        <span className="font-bold ">Total Price :</span> 40000 USD
      </h3>
    </div>
  );
};
Cart.propTypes = {
  selectedCards: PropTypes.object,
  addedCredit: PropTypes.number,
  remainingCredit: PropTypes.number,
};
export default Cart;
