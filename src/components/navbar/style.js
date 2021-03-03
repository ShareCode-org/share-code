import styled, { css } from 'styled-components';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const linkStyle = css`
    font-size: 16px;
    color: grey;
    text-decoration: none;
    :hover {
        color: #a8a8a8;
        transition: all 0.3s ease 0.1s;
    }
`;

const LiStyle = css`
    display: inline-block;
    transition: all 0.3s ease 0.1s;
`

export const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    margin: 3.5%;
    margin-bottom: 3%;
    font-size: 25px;
    border-bottom: solid 1px lightgrey;
`;

export const NavbarUl = styled.ul`
    position: relative;
    top: -10px;
    right: 150px;
`;

export const NavbarA = styled(NavLink)`${linkStyle}`;

export const LogoutA = styled(Link)`${linkStyle}`;

export const NavbarLi = styled.li`
    ${LiStyle}
    padding: 10px 30px;
`;

export const AccountContainer = styled.li`
    ${LiStyle}
    padding: 0px 10px;
`;

export const NavbarLogo = styled.h1`
    cursor: pointer;
    position: relative; 
    top: -10px;
`;

export const NotAvailable = styled(Link)`
    ${linkStyle}
    cursor: not-allowed;
`;