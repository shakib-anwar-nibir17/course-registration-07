# This is a single page react application

## Features

Here are some of the key features of our project:

- **Feature 1:** This is course registration react application where students/users can select courses for purchase. A course can only be purchased a single time.
- **Feature 2:** Each courses have fixed credit hour, price for each courses.
- **Feature 3:** Each students/users has a allocation for 20 credit hour each and no further credit hour will be added after reaching the allocation amount.

## Managing the state of this project

State is a key feature in React that is used to manage and store data within a component. State is a dynamic, modifiable data structure that can change over time as a result of user interactions, API requests, or other events. When a component's state changes, React re-renders the component to reflect the modified data.

### State Management of the project

- **State 1:** const [addedCourse, setAddedCourse] = useState([]);
  const handleAddedCourse = (course) => {
  const newAddedCourse = [...addedCourse, course];
  setAddedCourse(newAddedCourse);
  };

This state is passed on to the Courses component and to handle this state variable and function to update it , a new handle function was created named "handleAddedCourse" and this was passed onto the "Courses" component. Then it was passed onto the "Course" component and was received as a props and was added inside the handleClicked function to update the state of function.

- **State 2:** const [creditAdded, setCreditAdded] = useState(0);
  const handleAddCredit = (credit) => {
  const finalTotalCredit = creditAdded + credit;
  if (finalTotalCredit > 20) {
  return toast.info("Credit limit reached", {
  position: toast.POSITION.TOP_CENTER,
  });
  }
  setCreditAdded(finalTotalCredit);
  };

Similar to the previous state this state was also passed to Course component was received as props to update the total credit hour. The useState stores the data of the courses that are being added to the cart and update the value accordingly.

- **State 3:** const [remainingCredit, setRemainingCredit] = useState(20)
  const handleRemainingCredit = (credit2) => {
  const finalTotalCredit2 = remainingCredit - credit2;
  if (finalTotalCredit2 < 0) {
  return;
  } else {
  setRemainingCredit(finalTotalCredit2);
  }
  };

Similar to the previous state it updates the remaining credit hour after being received as props inside the Course component.
