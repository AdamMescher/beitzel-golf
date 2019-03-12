import React from "react";
import StyledHero from "./styled";
import Knockout from "../Knockout/index";

const Hero = () => (
  <StyledHero>
    <Knockout lines={["Brian Beitzel", "Golf Professional"]} />
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <p>Long irons Dancing on the practise ground.</p>
      <p>
        That's a big slice Waggle your hips and swing A controlled draw Struck
        by lightning You skied it!
      </p>
    </div>
  </StyledHero>
);

export default Hero;
