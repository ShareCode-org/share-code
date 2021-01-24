import styled from 'styled-components';

export const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
    left: 0;
    z-index: 1;
    margin: 3.5%;
    margin-bottom: 3%;
    font-size: 25px;
    background-color: #fff;
    border-bottom: solid 1px lightgrey;
`;

export const NavbarLogo = styled.h1`
    cursor: pointer;
    position: relative; 
    top: -10px;
`;

export const NavbarButton = styled.button`
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    background-color: blue;
    color: white;
    cursor: pointer;
    position: relative;
    top: -6px;
    right: 20px;
    padding: 10px;
    border: none;
    outline: none;
    &:hover {
        background-color: #0000e8;
    }
`;