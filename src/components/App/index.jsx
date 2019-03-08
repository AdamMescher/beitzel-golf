import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import StyledApp from "./styled.js";
import theme from "../../lib/theme";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StyledApp>
        <h1>Hello World</h1>
      </StyledApp>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
