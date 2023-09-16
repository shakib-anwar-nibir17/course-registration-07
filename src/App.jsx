import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [addedCourse, setAddedCourse] = useState([]);
  const [creditAdded, setCreditAdded] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [price, setPrice] = useState(0);

  const handleAddedCourse = (course) => {
    const newAddedCourse = [...addedCourse, course];
    setAddedCourse(newAddedCourse);
  };
  const handleAddCredit = (credit) => {
    const finalTotalCredit = creditAdded + credit;
    if (finalTotalCredit > 20) {
      return toast.info("Credit limit reached", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setCreditAdded(finalTotalCredit);
  };
  const handleRemainingCredit = (credit2) => {
    const finalTotalCredit2 = remainingCredit - credit2;
    if (finalTotalCredit2 < 0) {
      return;
    } else {
      setRemainingCredit(finalTotalCredit2);
    }
  };

  const handlePrice = (cost) => {
    setPrice(price + cost);
  };

  return (
    <>
      <div className="bg-[#F3F3F3]">
        <Header></Header>
        <ToastContainer />
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
