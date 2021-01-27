import React from 'react';
import { NavbarDiv, NavbarLogo, NavbarUl, NavbarLi, NavbarA, NotAvailable } from './style';

const Navbar = () => {
    return (
        <NavbarDiv>
            <div onClick={() => window.location.href = '/'}>
                <NavbarLogo style={{ color: "lightgrey" }}>
                    <span style={{ color: "darkblue" }}>Share</span>Code
                </NavbarLogo>
            </div>
            <div>
                <NavbarUl>
                    <NavbarLi>
                        <NavbarA
                            to="/"
                            exact
                            activeStyle={{
                                borderBottom: "#a8a8a8"
                            }}>
                            Home
                        </NavbarA>
                    </NavbarLi>
                    <NavbarLi>
                        <NavbarA
                            to="/post"
                            activeStyle={{
                                borderBottom: "#a8a8a8"
                            }}>
                            Post
                        </NavbarA>
                    </NavbarLi>
                    <NavbarLi>
                        <NotAvailable
                            to=""
                            activeStyle={{
                                color: "#a8a8a8"
                            }}
                            onClick={() => alert('Not Available')}
                        >
                            Sign in
                        </NotAvailable>
                    </NavbarLi>
                </NavbarUl>
            </div>
        </NavbarDiv>
    )
};

export default Navbar;