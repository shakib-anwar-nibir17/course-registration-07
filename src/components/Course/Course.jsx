import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { TfiBook } from "react-icons/tfi";
const Course = ({
  course,
  handleAddedCourse,
  handleAddCredit,
  handleRemainingCredit,
  handlePrice,
  addedCourse,
}) => {
  const { cover, title, description, creditHour, price } = course;

  const handleButtonClicked = () => {
    const isExist = addedCourse.find((item) => item.id == course.id);
    if (isExist) {
      return alert("already exist");
    } else {
      // const newAddedCourse = [...addedCourse, course];
      // setAddedCourse(newAddedCourse);
      handleAddCredit(creditHour);
      handleAddedCourse(course);
      handleRemainingCredit(creditHour);
      handlePrice(price);
    }
    // handleAddCredit(creditHour);
    // handleAddedCourse(course);
    // handleRemainingCredit(creditHour);
    // handlePrice(price);
  };
  return (
    <div className="w-[400px] rounded-xl space-y-5 p-4 bg-white">
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
        <button
          onClick={handleButtonClicked}
          className="bg-[#2F80ED] text-white w-3/4 mx-auto p-3 rounded-lg text-bold"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleAddedCourse: PropTypes.func,
  handleAddCredit: PropTypes.func,
  handleRemainingCredit: PropTypes.func,
  handlePrice: PropTypes.func,
  addedCourse: PropTypes.array,
};
export default Course;
