import React from "react";
import { StyledMenu, StyledBurger } from "./style"

export const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
};

const ResponsiveNavbar = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href="/">
          Home
        </a>
        <a href="/post">
          Post 
          </a>
        <a href="/signin">
          Sign in   
          </a>
      </StyledMenu>
    )
};

export default ResponsiveNavbar;