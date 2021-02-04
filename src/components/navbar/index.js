import React from 'react';
import { UserContext } from '../../context/userContext';
import { NavbarDiv, NavbarLogo, NavbarUl, NavbarLi, NavbarA, LogoutA, NotAvailable } from './style';

const Navbar = () => {
    const { isLogging, setIsLogging } = React.useContext(UserContext);

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
                                color: "#a8a8a8"
                            }}>
                            Home
                        </NavbarA>
                    </NavbarLi>


                    {
                        isLogging ? (
                            <NavbarLi>
                                <NavbarA
                                    to="/post"
                                    activeStyle={{
                                        color: "#a8a8a8"
                                    }}>
                                    Post
                                    </NavbarA>
                            </NavbarLi>
                        ) : (
                                <NavbarLi>
                                    <NotAvailable>
                                        Post
                                    </NotAvailable>
                                </NavbarLi>
                            )
                    }

                    {
                        isLogging ? (
                            <NavbarLi>
                                <LogoutA
                                    onClick={() => {
                                        setIsLogging(false);
                                        localStorage.setItem('token', '');
                                        localStorage.setItem('isLogging', false);
                                    }}
                                >
                                    Logout
                             </LogoutA>
                            </NavbarLi>
                        ) : (
                                <NavbarLi>
                                    <NavbarA
                                        to="/sign-up-and-sign-in"
                                        activeStyle={{
                                            color: "#a8a8a8"
                                        }}
                                    >
                                        Sign in
                             </NavbarA>
                                </NavbarLi>
                            )
                    }
                </NavbarUl>
            </div>
        </NavbarDiv>
    )
};

export default Navbar;