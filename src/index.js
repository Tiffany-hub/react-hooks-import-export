 import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";

function Parks() {
  return (
    <div>
       <ColoradoStateParks />
       <p>There are 42 parks in Colorado State Parks</p>
    </div>
  );
}

ReactDOM.render(<Parks />, document.getElementById("root"));
