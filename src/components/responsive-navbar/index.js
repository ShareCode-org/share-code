import React from "react";
import { UserContext } from '../../context/userContext';
import { StyledMenu, StyledBurger } from "./style";

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger className='not-btn' open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
};

const ResponsiveNavbar = ({ open }) => {
  const { isLogging, setIsLogging } = React.useContext(UserContext);

  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
        </a>
      {
        isLogging ? (
          <a href="/post">
            Post
          </a>
        ) : (
            <a onClick={() => alert('Not Available')}>
              Post
            </a>
          )
      }

      {
        isLogging ? (
          <a
            onClick={() => {
              setIsLogging(false);
              localStorage.setItem('token', '');
              localStorage.setItem('isLogging', false);
            }}>
            Logout
          </a>
        ) : (
            <a href="/sign-up-and-sign-in">
              Sign in
            </a>
          )
      }




    </StyledMenu>
  )
};

export default ResponsiveNavbar;