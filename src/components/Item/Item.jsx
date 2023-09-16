import PropTypes from "prop-types";

const Item = ({ item }) => {
  const { title } = item;
  return (
    <div className="px-5 py-2">
      <li>{title}</li>
    </div>
  );
};
Item.propTypes = {
  item: PropTypes.object,
};
export default Item;
