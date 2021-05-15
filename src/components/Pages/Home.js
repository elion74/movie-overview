import React, {useEffect, useState} from 'react';
import Search from '../Search.js';
import ItemLister from '../ItemLister.js';
import * as homestyle from './home.module.css';

export default function Home(){

    const [theater, setTheater] = useState([]);
    const [boxoffice, setBoxOffice] = useState([]);
    const [topmovies, setTopMovies] = useState([]); 


    useEffect(() => {

        fetch(`https://imdb-api.com/API/InTheaters/${process.env.REACT_APP_API_KEY}`)
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result.items);
          setTheater(result.items);
        })
        .catch((err) => {
          console.log(err);
        });


        fetch(`https://imdb-api.com/API/BoxOffice/${process.env.REACT_APP_API_KEY}`)
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result.items);
          setBoxOffice(result.items);
        })
        .catch((err) => {
          console.log(err);
        });

        
        fetch(`https://imdb-api.com/API/Top250Movies/${process.env.REACT_APP_API_KEY}`)
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result.items);
          setTopMovies(result.items);
        })
        .catch((err) => {
          console.log(err);
        });

    }, []);


    return(
        <div className = {homestyle.platzvergrösserer}>
            <div className = {homestyle.home_search}>
                <h1 className = {homestyle.welcome}>Welcome</h1>
                <h2>Millons of movies, series and more <b>Explore now</b></h2>
                <Search/>
            </div> 

        <h3 className = {homestyle.headlines}>In Theater</h3>
        <ItemLister item = {theater}/>
            
            
        <h3  className = {homestyle.headlines}>BoxOffice</h3>
        <ItemLister item = {boxoffice}/>


        <h3  className = {homestyle.headlines}>Top 250 Movies</h3>
        <ItemLister item = {topmovies}/>

        </div>

    );
}