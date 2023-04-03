import React, { useState } from "react";

type Props = {};

const App = (props: Props) => {
  const [onBreak,setOnBreak]=useState(false);

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "BreakStart") {
      // Do something when the button is clicked on the page
      console.log("helooooooooo")
    }
  });
  const handleClick = () => {
    chrome.runtime.sendMessage({ message: "clickButton" }, function (response) {
      console.log(response);
       if(response.status==="done"){
        setOnBreak(!onBreak);
       }
    });
  };
  
  const handleStop=()=>{
    chrome.runtime.sendMessage({ message: "stopBreak" }, function (response) {
      if(response.status==="done"){
        setOnBreak(!onBreak);
       }
      });
      }
  return (
    <div>
      <button onClick={handleClick}>start Break</button>
      <button onClick={handleStop}>stop Break</button>
    </div>
  );
};

export default App;
