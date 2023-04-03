import React, { useEffect, useState } from "react";

type Props = {};

const App = (props: Props) => {
  const [onBreak, setOnBreak] = useState(false);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.message === "Button clicked!") {
      // Do something when the button is clicked on the page
      console.log("helooooooooo");
    }
  });
  const handleClick = () => {
    chrome.runtime.sendMessage({ message: "clickButton" }, function (response) {
      console.log(response);
      if (response.status === "done") {
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
  };
  return (
    <div>
      <div className="btn_wraper">
        <button onClick={handleClick} className="start_button">
          {time.toLocaleTimeString()}
          <br />
          start Break
        </button>
        <button onClick={handleStop} className="stop_button">
          {/* <svg viewBox="25 25 50 50" className="DN">
            <circle cx="50" cy="50" r="20"></circle>
          </svg> */}
          stop Break
        </button>
      </div>
    </div>
  );
};

export default App;
