import React from 'react';
import { NavbarDiv, NavbarLogo, NavbarButton } from './style';

const Navbar = () => {
    return (
        <NavbarDiv>
            <div onClick={() => window.location.href = '/'}>
                <NavbarLogo style={{ color: "lightgrey" }}>
                    <span style={{ color: "darkblue" }}>Share</span>Code
                </NavbarLogo>
            </div>
            <div>
                <NavbarButton onClick={() => window.location.href = '/post'}>Post</NavbarButton>
            </div>
        </NavbarDiv>
    )
};

export default Navbar;