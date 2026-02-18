import React, { useState } from "react";
import styled, { isStyledComponent } from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: blue;
  color: white;
`;

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Success");

  let message;
  let remainingClick = 10 - count;

  function handleIncrease() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  if (count < 10) {
    message = (
      <div>
        <h3> You clicked {count} times </h3>
        <p> Still{remainingClick} more times to reach a 10% discount </p>
      </div>
    );
  } else if (count === 10) {
    message = (
      <div>
        <h3> You clicked {count} times </h3>
        <p> You unlocked a 10% discount </p>
      </div>
    );
  } else if (count < 20) {
    message = (
      <div>
        <h3> You clicked {count} times </h3>
        <p>
          You're on your way for more rewards! Keep clicking for 20% discount
        </p>
      </div>
    );
  } else {
    count === 20;
    message = (
      <div>
        <h3> You clicked {count} times </h3>
        <p>You've got the utmost discount.You're a click master</p>
      </div>
    );
  }

  let displayComp = () => {
    switch (data) {
      case "Loading":
        return <LoadingComp />;
        break;
      case "Success":
        return <SuccessComp />;
        break;
      case "Error":
        return <ErrorComp />;
        break;
    }
  };

  return (
    <div>
      <h1> Click to unlock rewards 💥 </h1>
      <Button onClick={handleIncrease}> Click me! </Button>
      {message}

      {displayComp()}

      {/* {count >= 10 ? (
        <p> You unlocked a 10% discount</p>
      ) : (
        <p> click 10 times to unlock a reward</p>
      )}

      {count >= 20 && <p> You're a Click master </p>} */}
    </div>
  );
};

export default CounterApp;

function LoadingComp() {
  return <h6>Loading...</h6>;
}

function SuccessComp() {
  return <h6> Success ❤️ </h6>;
}

function ErrorComp() {
  return <h6> Error 😭 </h6>;
}
