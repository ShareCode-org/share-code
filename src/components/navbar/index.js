import React, { useContext } from 'react';
import NavbarAccount from '../navbar-account/index';
import { UserContext } from '../../context/userContext';
import { NavbarDiv, NavbarLogo, NavbarUl, NavbarLi, AccountContainer, NavbarA, LogoutA } from './style';

const Navbar = () => {
    const { isLogging, setIsLogging } = useContext(UserContext);

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
                    <NavbarLi>
                        <NavbarA
                            to="/leaderboard"
                            activeStyle={{
                                color: "#a8a8a8"
                            }}>
                            Leaderboard
                        </NavbarA>
                    </NavbarLi>
                    <NavbarLi>
                        <NavbarA
                            to="/post"
                            activeStyle={{
                                color: "#a8a8a8"
                            }}>
                            Post
                        </NavbarA>
                    </NavbarLi>
                    <AccountContainer>
                        <NavbarAccount
                            isLogging={isLogging}
                            setIsLogging={setIsLogging}
                        />
                    </AccountContainer>
                </NavbarUl>
            </div>
        </NavbarDiv>
    )
};

export default Navbar;