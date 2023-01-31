import React, { useState } from "react";

function App() {
  //save the time in this const everytime we call it.
  const time = () => new Date().toLocaleTimeString("de");

  var [currentTime, setCurrentTime] = useState(time);

  function updateTime() {
    setCurrentTime((currentTime = time));
  }
//create an intervall to dinamically update the h1.
//const interval = setInterval(updateTime, 1000);



  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

//Challenge:
//1. Given that you can get the current time using:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

export default App;
