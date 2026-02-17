import React, { useState } from "react";

const CounterApp = () => {
  //   let count = 0;

  let [count, setCount] = useState(0);

  function returnState() {
    return 100;
  }

  let [sample, setSample] = useState(returnState);

  function handleIncrease() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setCount((prevCount) => {
      return prevCount + 1;
    });
    // count += 1;
    // console.log(count);
  }
  function handleDecrease() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
    setCount((prevCount) => {
      return prevCount - 1;
    });
    setCount((prevCount) => {
      return prevCount - 1;
    });
    // count -= 1;
    // console.log(count);
  }

  return (
    <div>
      <h1>click to unlock rewards 💥 </h1>
      <button onClick={handleIncrease}> Increase </button>
    </div>
  );
};

export default CounterApp;
