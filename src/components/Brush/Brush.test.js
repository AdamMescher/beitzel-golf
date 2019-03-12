import React from "react";
import ReactDOM from "react-dom";
import Brush from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Brush />, div);
  ReactDOM.unmountComponentAtNode(div);
});
