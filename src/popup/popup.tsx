import React from "react";
import ReactDOM from "react-dom";
import "./popup.scss";
import App from "./App";

const popup: React.FC<{}> = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
