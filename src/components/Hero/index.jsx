import React from "react";
import StyledHero from "./styled";
import Knockout from "../Knockout/index";
import Brush from "../Brush/index";
import brushes from "../../lib/brushes";

const Hero = () => (
  <StyledHero>
    <div className="knockout-and-brush-container">
      <Knockout lines={["Brian Beitzel", "Golf Professional"]} />
      <Brush img={brushes.brushOne} />
    </div>
    <div className="hero-copy-container">
      <p className="hero-copy-text">
        Long irons Dancing on the practice ground.
      </p>
      <p className="hero-copy-text">
        That's a big slice Waggle your hips and swing A controlled draw Struck
        by lightning You skied it!
      </p>
    </div>
  </StyledHero>
);

export default Hero;
