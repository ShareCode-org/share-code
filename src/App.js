import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CodePage from './pages/code-page/index';
import Navbar from './components/navbar/index';
import ResponsiveNavbar, { Burger } from "./components/responsive-navbar/index";
import HomePage from './pages/home-page/index';
import PostPage from './pages/post-page/index';
import './App.css';

const App = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    return (
        <div className="App">
            <Navbar />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <ResponsiveNavbar open={open} setOpen={setOpen} />
            </div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/post" component={PostPage} />
                <Switch>
                    <Route path={`/post/:id`} component={CodePage} />
                </Switch>
            </Switch>
        </div>
    )
};



export default App;

