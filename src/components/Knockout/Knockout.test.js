import React from "react";
import ReactDOM from "react-dom";
import Knockout from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Knockout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
