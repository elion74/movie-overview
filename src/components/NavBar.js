import React, { useState } from 'react';
import * as navstyle from './navstyle.module.css';
import { Link } from 'react-router-dom';
import {Menu, MenuItem} from '@material-ui/core';
import logo from './logo5.png';

export default function(){

    const [movieanchor, setMovieanchor] = useState(null);
    const [showanchor, setShowanchor] = useState(null);
    const [eventanchor, setEventanchor] = useState(null);


    const handleClick = (event) => {
        if(event.target.name === 'movie'){    
            setMovieanchor(event.currentTarget);
        
        }else if(event.target.name === 'show'){
            setShowanchor(event.currentTarget);

        }else {
            setEventanchor(event.currentTarget);

        }
    }
  
    const handleClose = () => {
        setMovieanchor(null);
        setShowanchor(null);
        setEventanchor(null);   
    }
  
 
return(
    <div className = {navstyle.navbar}>
        <div className = {navstyle.navbar_content}>
            <h1 className = {navstyle.nav_logo}> <Link to = '/' style={{ textDecoration: 'none', display: 'block', color:'black'}}> <img src = {logo}/> </Link></h1>
                <a name = 'movie' aria-controls="simple-menu" aria-haspopup="true" onClick = {(event) => {handleClick(event) }} >Movies</a>
                <a name = 'show' aria-controls="simple-menu" aria-haspopup="true" onClick = {(event) => {handleClick(event) }} >Series</a>
                <a aria-controls="simple-menu" aria-haspopup="true" onClick = {(event) => {handleClick(event) }}>Events</a>

            <Menu
                id="simple-menu"
                anchorEl={movieanchor}
                keepMounted
                open={Boolean(movieanchor)}
                onClose={handleClose}
            >

                <Link to={'/movies/upcoming'} style={{ textDecoration: 'none', display: 'block', color:'black'}}>
                    <MenuItem>
                        Upcoming
                    </MenuItem>Y
                    
                </Link>

               <Link to={'/movies/popular-movies'} style={{ textDecoration: 'none', display: 'block', color: 'black'}}>
                    <MenuItem>
                        Popular Movies
                    </MenuItem>
                </Link>

            </Menu>


            <Menu
                id="simple-menu"
                anchorEl={showanchor}
                keepMounted
                open={Boolean(showanchor)} 
                onClose={handleClose}
            >


                <Link to={'/shows/toptv'} style={{ textDecoration: 'none', display: 'block', color:'black'}}>
                    <MenuItem>
                    Top 250 TV
                    </MenuItem>
                </Link>

                <Link to={'/shows/popular-show'} style={{ textDecoration: 'none', display: 'block', color:'black'}}>
                    <MenuItem>
                        Popular Shows
                    </MenuItem>
                </Link>
            
            </Menu>


            <Menu
                id="simple-menu"
                anchorEl={eventanchor}
                keepMounted
                open={Boolean(eventanchor)}
                onClose={handleClose}
            >
            
                <Link to={'/events/oscars'} style={{ textDecoration: 'none', display: 'block', color:'black'}}>
                    <MenuItem>
                        Oscars
                    </MenuItem>
                </Link>

                <Link to={'/events/emmys'} style={{ textDecoration: 'none', display: 'block', color:'black'}}>
                    <MenuItem>
                        Emmys
                    </MenuItem>
                </Link>
            
            </Menu>

        </div>



    </div>
);
}    