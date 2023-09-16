import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({
  handleAddedCourse,
  handleAddCredit,
  handleRemainingCredit,
  handlePrice,
}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {courses.map((course) => (
          <Course
            handleAddedCourse={handleAddedCourse}
            handleAddCredit={handleAddCredit}
            handleRemainingCredit={handleRemainingCredit}
            handlePrice={handlePrice}
            key={course.id}
            course={course}
          ></Course>
        ))}
      </div>
    </div>
  );
};
Courses.propTypes = {
  handleAddedCourse: PropTypes.func,
  handleAddCredit: PropTypes.func,
  handleRemainingCredit: PropTypes.func,
  handlePrice: PropTypes.func,
};
export default Courses;
