import React, { useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroBtn,
  HeroH1,
  HeroP,
  HeroItems,
} from "./HeroElements";


const Hero = () => {
    const [isOpen, setIsopen] = useState(false);
    const toggle = () => {
        setIsopen(!isOpen);
    }
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Mas que una Pizza</HeroH1>
          <HeroP>Lista en Solo 2 min</HeroP>
          <HeroBtn>Ordena Aqui!!!</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
