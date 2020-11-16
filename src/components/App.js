import './../App.css';
import React from "react";
import NavBar from "./NavBar";
import Body from "./Body";

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <NavBar />
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
