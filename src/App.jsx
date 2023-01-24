import React from "react";

let greeting = "";
let currTime = new Date();
currTime = currTime.getHours();
let cssStyle = {};

if (currTime >= 0 && currTime < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currTime >= 12 && currTime < 16) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else if (currTime >= 16 && currTime < 20) {
  greeting = "Good Evening";
  cssStyle.color = "#a86832";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

function App() {
  return (
    <>
      <h1>
        Hello Everyone, <span style={cssStyle}>{greeting}</span>
      </h1>
      
    </>
  );
}

export default App;
