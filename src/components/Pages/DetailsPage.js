import React, { useEffect, useState } from 'react';
import ItemLister from '../ItemLister.js';

import Rating from '@material-ui/lab/Rating';
import {Box, Typography} from '@material-ui/core';
import detailspagestyle from './detailspage.module.css';

export default function DetailsPage({match}){
 
    const [showdata, setShowData]  = useState([]);
    const [showratings, setShowRatings] = useState([]);
    const [showtrailer, setShowTrailer] = useState([]);
    const [actorlist, setActorList] = useState([]);


    useEffect(() => {
      
        // hier if machen als if (showdata === []) dann request mit fetch --Y aber al erstesmit unten versuchen!!!!

        fetch(`https://imdb-api.com/de/API/Title/${process.env.REACT_APP_API_KEY}/${match.params.itemid}/Images,Trailer,Ratings,Wikipedia,`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            // hier ist die data von einen einzelnen item --> also wikipaedia, trailer, actors, usw..-->da einfach inein state!!!
            console.log(result);
            console.log(result.trailer);

            setActorList(result.actorList);
            setShowRatings(result.ratings);
            setShowTrailer(result.trailer);
            setShowData(result);
        })
        .catch((err) => {
            console.log(err);
        });
        
    }, [match]);

    
    return(
        <div className = {detailspagestyle.details_container}>

            <img className = {detailspagestyle.image} src = {showdata.image} alt = ''/>

        <div className = {detailspagestyle.itemdata_container}>

                <strong className = {detailspagestyle.headline}>{showdata.title}</strong>
                       
                        <p className  = {detailspagestyle.keywords}>Overview</p>
                    <p>{showdata.plotLocal}</p> <br/>


                        <p className  = {detailspagestyle.keywords}>Stars</p>
                    <p>{showdata.stars}</p> 

                        <p className  = {detailspagestyle.keywords}>Genres</p>
                    <p>{showdata.genres}</p> <br/>


                    <Box className = {detailspagestyle.box} component="fieldset" borderColor="transparent">
                        <Typography component="legend">filmAffinity</Typography>
                        <Rating  name="read-only" value={parseInt(showratings.filmAffinity)} max={10} readOnly />
                    </Box>

                    <Box className = {detailspagestyle.box} component="fieldset" borderColor="transparent">
                        <Typography component="legend">ImDb</Typography>
                        <Rating name="read-only" value={parseInt(showratings.imDb)} max={10} readOnly />
                    </Box>

                    <Box className = {detailspagestyle.box} component="fieldset" borderColor="transparent">
                        <Typography component="legend">tV_com</Typography>
                        <Rating name="read-only" value={parseInt(showratings.tV_com)} max={10} readOnly />
                    </Box>



        </div>


            <ItemLister item = {actorlist}/>
        
        
            <iframe src={showtrailer.linkEmbed}
                    frameborder='0'
                    fullscreen
                    title='video'
                    className = {detailspagestyle.trailer}
            />

        </div>
    );    
}