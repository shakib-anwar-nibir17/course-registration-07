import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [addedCourse, setAddedCourse] = useState([]);
  const [creditAdded, setCreditAdded] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [price, setPrice] = useState(0);

  const handleAddedCourse = (course) => {
    // const isExist = addedCourse.find((item) => item.id == course.id);
    // if (isExist) {
    //   return alert("already exist");
    // } else {
    //   const newAddedCourse = [...addedCourse, course];
    //   setAddedCourse(newAddedCourse);
    // }
    const newAddedCourse = [...addedCourse, course];
    setAddedCourse(newAddedCourse);
  };
  const handleAddCredit = (credit) => {
    setCreditAdded(creditAdded + credit);
  };
  const handleRemainingCredit = (credit2) => {
    setRemainingCredit(remainingCredit - credit2);
  };
  const handlePrice = (cost) => {
    setPrice(price + cost);
  };
  return (
    <>
      <div className="bg-[#F3F3F3]">
        <Header></Header>
        <div className="container mx-auto space-x-5  flex mt-10">
          <Courses
            handleAddedCourse={handleAddedCourse}
            handleRemainingCredit={handleRemainingCredit}
            handleAddCredit={handleAddCredit}
            handlePrice={handlePrice}
            addedCourse={addedCourse}
          ></Courses>
          <div>
            <Cart
              addedCourse={addedCourse}
              creditAdded={creditAdded}
              remainingCredit={remainingCredit}
              price={price}
            ></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
