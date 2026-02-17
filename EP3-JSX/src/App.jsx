import "./App.css";
import React from "react";

let author = "Aomine";

let isLogged = true;

function App() {
  return (
    <>
      <h1 style={{ backgroundColor: "red", color: "white" }}> React JSX </h1>
      <label htmlFor="user"> UserName: </label>
      <input id="user" type="text" />
      <p> {author} </p>
      {isLogged && <p> Welcome to our website </p>}
      {/* <button onClick={newFun}> </button> */}
      <h2> Next component </h2>
    </>
  );
}

export default App;
