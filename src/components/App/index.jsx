import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import StyledApp from "./styled.js";
import Header from "../Header/index";
import Hero from '../Hero/index';
import theme from "../../lib/theme";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header />
        <Hero />
      </StyledApp>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
