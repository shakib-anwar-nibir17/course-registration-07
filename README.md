# This is a single page react application

## Features

Here are some of the key features of our project:

- **Feature 1:** This is course registration react application where students/users can select courses for purchase. A course can only be purchased a single time.
- **Feature 2:** Each courses have fixed credit hour, price for each courses.
- **Feature 3:** Each students/users has a allocation for 20 credit hour each and no further credit hour will be added after reaching the allocation amount.

## Managing the state of this project

State is a key feature in React that is used to manage and store data within a component. State is a dynamic, modifiable data structure that can change over time as a result of user interactions, API requests, or other events. When a component's state changes, React re-renders the component to reflect the modified data.

### State Management of the project

- **State 1:** const [allCards, setAllCards] = useState([]);

A state variable called allCards has an empty array as its initial value.
The function setAllCards is used to modify the allCards state. Normally, you call it whenever you wish to modify the value of allCards. This function receives the new value as an argument. After fetching data from the local json file, the available data are stored via allCard array in which map function is applied to access the objects and define values in the return function dynamically.

- **State 2:** const [selectedCards, setSelectedCards] = useState([]) ;

Another state variable with an empty array as its initial value is selectedCards.
The function used to modify the selectedCards state is called setSelectedCards. It is employed to alter the list of chosen cards. It has a handle function which selects the array and store it inside the selectedCard array and by using find function the data can be accessed for conditional rendering.

- **State 3:** const [remainingCredit, setRemainingCredit] = useState(20)

remainingCredit is a state variable with the default value of 20.The function remainingCredit is used to update the remainingCredit state. When cards are picked or deselected, it changes the remaining credit value.

- **State 4:** const [addedCredit, setAddedCredit] = useState(0)

This state variable, addedCredit, appears to be used to maintain track of the total credit hours linked with the cards in the React component that have been selected. As you choose cards, it may use setAddedCredit to change this state to reflect the total credit hours added to the user's cart.
