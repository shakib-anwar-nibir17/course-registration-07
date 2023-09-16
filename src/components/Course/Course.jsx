import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { TfiBook } from "react-icons/tfi";
const Course = ({ course }) => {
  const { cover, title, description, creditHour, price } = course;
  return (
    <div className="w-[400px] border-red-300 border-2 rounded-xl space-y-5 p-4">
      <img
        className="w-full"
        src={cover}
        alt={`This is the image of ${title}`}
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-justify">{description}</p>
      <div className="flex justify-center gap-4 items-center text-xl">
        <FiDollarSign></FiDollarSign>
        <p>Price: {price}</p>
        <TfiBook></TfiBook>
        <p>
          Credit:
          <span>{creditHour}</span> hr.
        </p>
      </div>
      <div className="mt-auto flex justify-center">
        <button className="bg-[#2F80ED] text-white w-3/4 mx-auto p-3 rounded-lg text-bold">
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};
export default Course;
