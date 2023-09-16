import PropTypes from "prop-types";
import Item from "../Item/Item";
const Cart = ({ addedCourse }) => {
  return (
    <div className="bg-white mb-10 p-5 rounded-lg">
      <h3 className="text-[#2F80ED] font-bold text-xl mb-3">
        Credit Remaining 7 hr
      </h3>
      <hr className="border-1 mb-3" />
      <h3 className="font-bold text-xl mb-3">Course Name:</h3>
      <div>
        <ol className="list-decimal">
          {addedCourse.map((item, idx) => (
            <Item key={idx} item={item}></Item>
          ))}
        </ol>
      </div>
      <hr className="border-1 mb-3" />
      <h3 className=" text-xl mb-3">Total Credit Hour : 13</h3>
      <hr className="border-1 mb-3" />
      <h3 className="text-xl mb-3">
        <span className="font-bold ">Total Price :</span> 48000 USD
      </h3>
    </div>
  );
};
Cart.propTypes = {
  addedCourse: PropTypes.array,
};
export default Cart;
