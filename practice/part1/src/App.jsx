/* eslint-disable no-unused-vars */
/* JavaScript: props and classes

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
};

arto.growOlder = function () {
  this.age += 1;
};

const App = () => {
  const now = new Date();
  const name = "Gloria";
  const age = 10;

  return (
    <div>
      <p>Greetings, it is {now.toString()}</p>
      <Hello name={name} age={age} />
    </div>
  );
};
*/

/* Component: helper function

const Hello = (props) => {
  // destructure values from objects and arrays
  const name = props.name;
  const age = props.age;

  const bornYear = () => new Date().getFullYear() - age; // <-- the age doesn't need to be passed as a parameter

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};
*/

import { useState } from "react";

/* Event handling and stateful component

const App = () => {
  //function call adds state and render with init value 0
     returns an array that contains two items:
      *  counter - set with init value of state 0
      *  setCounter - for modifying the state
  const [counter, setCounter] = useState(0);

  //increment the counter state, and timeout of one second
     the function setCounter is invoked 1s after calling setTimeout
     when setCounter is called, React re-render the component 
     --> everytime the setCounter modifies the state, it causes the re-render, then increase the value...

  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("rendering...", counter);

  return <div>{counter}</div>;
};
*/

/* passing state to child component
const Display = ({ counter }) => <div>{counter}</div>;
const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => setCounter(counter + 1);
  console.log("increasing, value before", counter);
  const decreaseByOne = () => setCounter(counter - 1);
  console.log("decreasing, value before", counter);
  const setToZero = () => setCounter(0);
  console.log("resetting to zero, value before", counter);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};
*/

// more complex state
// conditional rendering
const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]); // remember every click occurred in the app

  /* object spread syntax

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,        <-- ...clicks, copied all of the properties of the clicks object
      right: clicks.right
    }
    setClicks(newClicks)
  }
  */

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

/* function returns a function
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }
  // method 1:
  return (
    <div>
      {value}

      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )

  // method 2:
  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
  
  
}
*/

export default App;
