import React from 'react';
import * as footerstyle from './footerstyle.module.css';
import logo from './logo5.png';

export default function Footer(){


    return(
        <div className = {footerstyle.footer_container}>

        {/* <span style = {{fontSize:'2em', color:'black'}}>LOGO</span> */}

        {/* <p className = {footerstyle.footer_logo}><img>{logo}</img></p> */}
        <img className = {footerstyle.footer_logo} src = {logo}/>

        <div className = {footerstyle.footer_items}>
            <p>Get the IMDb App</p> 
            <p>Help</p>
            <p>Site Index</p>
            <p>Box Office Mojo</p>
            <p> For Developer</p>
        </div>

        <div className = {footerstyle.footer_items}>
            <p>Press Room</p>
            <p>Advertising</p>
            <p>Conditions of Use</p>
            <p>Privacy Policy</p>
            <p>Interest-Based Ads</p>
        </div>

        <p className = {footerstyle.footer_last}>© 1990-2020 by IMDb.com, Inc.</p>

        </div>
    );
}