import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink, 
  SidebarWrap,
  SidebarRoute
} from "./SidebarElements";

const SideBar = ({isOpen , toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      < SidebarMenu>
        <SidebarLink to="products">Pizzas</SidebarLink>
        <SidebarLink to="/">Postres</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </ SidebarMenu>
      <SidebarWrap>
        <SidebarRoute to="/">Pidela ya!!!</SidebarRoute>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default SideBar;
