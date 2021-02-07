import React, { useState, useEffect, useRef, useMemo, Provider } from 'react';
import { isExpired } from "react-jwt";
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/userContext';
import Navbar from './components/navbar/index';
import ResponsiveNavbar, { Burger } from "./components/responsive-navbar/index";
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/home-page/index';
import PostPage from './pages/post-page/index';
import CodePage from './pages/code-page/index';
import SignUpAndSignIn from './pages/sign-up-and-sign-in/index';
import './App.css';

const App = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();

    const [isLogging, setIsLogging] = useState(false);
    const isLoggingProvider = useMemo(() => ({ isLogging, setIsLogging }), [isLogging, setIsLogging]);

    const isTokenExpired = isExpired(localStorage.getItem('token'));


    useEffect(() => {
        if (isTokenExpired) {
            localStorage.setItem('token', '');
            localStorage.setItem('isLogging', false);
            setIsLogging(false);
        };

        const data = localStorage.getItem('isLogging');
        setIsLogging(JSON.parse(data));
    }, [])

    return (
        <div className="App">
            <UserContext.Provider value={isLoggingProvider}>
                <Navbar />
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <ResponsiveNavbar open={open} setOpen={setOpen} />
                </div>
                <ToastContainer
                    position="bottom-right"
                    hideProgressBar
                />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/post">
                        {
                            isLogging ? (
                                <PostPage />
                            ) : (
                                    <Redirect to="/" />
                                )
                        }
                    </Route>
                    <Route path={`/post/:id`} component={CodePage} />
                    <Route path="/sign-up-and-sign-in">
                        {
                            isLogging ? (
                                <Redirect to="/" />
                            ) : (
                                    <SignUpAndSignIn />
                                )
                        }
                    </Route>
                </Switch>
            </UserContext.Provider>
        </div>
    )
};



export default App;

