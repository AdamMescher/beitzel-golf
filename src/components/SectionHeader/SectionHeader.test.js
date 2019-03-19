import React from "react";
import ReactDOM from "react-dom";
import SectionHeader from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SectionHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
