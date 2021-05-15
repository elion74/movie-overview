import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home.js';
import Error from './Pages/Error.js';

import Movies from './Pages/Movies.js';
import Shows from './Pages/Shows.js';
// import Events from './Pages/Events.js';

import DetailsPage from './Pages/DetailsPage.js';
import * as appstyle from './appstyle.module.css';


export default function App (){


    return(
        <div className = {appstyle.app}>
    
        <Router>                    
        <NavBar/>

            <Switch>
                <Route path = '/' exact component = {Home}/>

                <Route path = '/movies/:moviename' exact component = {Movies}/>
                <Route path = '/shows/:showname' exact  component = {Shows}/>
                {/* <Route path = '/events/:eventname' exact component = {Events}/> */}

                <Route path = '/details/:itemid' exact component = {DetailsPage}/>

                <Route  component = {Error} />
            </Switch>
            <Footer/>
        </Router>

        </div>
    );
}
