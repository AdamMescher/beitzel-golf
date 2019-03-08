import React from "react";
import { ThemeProvider } from "styled-components";
import StyledApp from "./styled.js";
import theme from "../../lib/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledApp>
      <h1>Hello World</h1>
    </StyledApp>
  </ThemeProvider>
);

export default App;
