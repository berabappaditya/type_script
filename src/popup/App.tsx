import React from "react";

type Props = {};

const App = (props: Props) => {
  const handleClick = () => {
    chrome.runtime.sendMessage({ action: "clickButton" }, function (response) {
      console.log("the rsss", response);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
