import React, { useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Card,makeStyles, CardActions, CardActionArea, CardMedia, Button} from '@material-ui/core';

import  * as cardstyle from './cardstyle.module.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop:70,
      margin:25,
    },
    media: {
      height: 400,
      width:250, 
    },
    headline:{
        marginTop:70
    }, 
    headlineContent:{
        height:400,
        width:300, 
    }
});   


export default function Movies({match}){
 
  const classes = useStyles();
//   here store movie data from api
  const [movies, setMovies] = useState([]);

    useEffect(() => {

      console.log(match);

        if(match.url === '/movies/upcoming'){
                console.log('hier holee ich daten von upcoming movies');

                fetch(`https://imdb-api.com/API/ComingSoon/${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                  return response.json();
                })
                .then(result => {
                  console.log(result.items);
                  setMovies(result.items);
                })
                .catch((err) => {
                  console.log(err);
                });
                


        }else if(match.url === '/movies/popular-movies'){ 
            console.log('hier holee ich daten von popular movies');

            fetch(`https://imdb-api.com/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`)
            .then(response => {
              return response.json();
            })
            .then(result => {
              console.log(result.items);
              setMovies(result.items);
            })
            .catch((err) => {
              console.log(err);
            });

        }

    }, [match]);




    if(match.url === '/movies/upcoming' || match.url === '/movies/popular-movies'){
        // return <Redirect to = '/'/>
    }
    else{
        return <Redirect to ='/'/>
    }
  

return(
<div className = {cardstyle.shows}>

                <aside className = {cardstyle.aside}>

                    <Card 
                    className={classes.headline}
                    >
                    <h1>{match.params.moviename}</h1>
                    <CardActionArea>
                        <CardMedia
                        className={classes.headlineContent}
                        />        
                        </CardActionArea>
                    </Card>

                </aside>
    
    <div className = {cardstyle.card_container}>


    	{movies.map((item) => 
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.image}
            alt = 'sorry no image'
            title={item.title}
          />
        </CardActionArea>
        <CardActions>  
          <Button size="small" className={classes.margin}>
          {/* !!!! hier ein parameter angeben damit wenn detail augerufen wird einfach api call gemacht werden kann */}
              {/* weil sonst weiss man nicht welche daten man holen soll aus api */}
              <Link  to = {`/details/${item.id}`} style={{ textDecoration: 'none', display: 'block', color:'black'}}>See More</Link>
          </Button>

        </CardActions>
      </Card> 
      )}

    </div>
 
</div>
);
}