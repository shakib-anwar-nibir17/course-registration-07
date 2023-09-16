import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [addedCourse, setAddedCourse] = useState([]);
  const handleAddedCourse = (course) => {
    const newAddedCourse = [...addedCourse, course];
    setAddedCourse(newAddedCourse);
    // console.log(course);
  };
  return (
    <>
      <div className="bg-[#F3F3F3]">
        <Header></Header>
        <div className="container mx-auto space-x-5  flex mt-10">
          <Courses handleAddedCourse={handleAddedCourse}></Courses>
          <div>
            <Cart addedCourse={addedCourse}></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
