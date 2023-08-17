import React from "react";
import ReactDOM from "react-dom";
const name = "Nithin";
const currentDate = new Date();
const year = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>Copyrights by {year} </p>
  </div>,
  document.getElementById("root")
);
