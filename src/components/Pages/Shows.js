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


export default function Shows({match}){

  const classes = useStyles();
  // here store api data
  const [shows, setShows] = useState([]);

  // !!!hier vielleicht ein useEffect um api call zu machen und dann in ein state zu machen und halt dabei alle daten in cards reinmachen
    useEffect(() => {

        console.log(match);

  
        if(match.url === '/shows/toptv'){
          console.log('hier hole ich die daten von topTv');
        
          fetch(`https://imdb-api.com/API/Top250TVs/${process.env.REACT_APP_API_KEY}`)
            .then(response => {
              return response.json();
            })
            .then(result => {
              console.log(result.items);
              setShows(result.items);
            })
            .catch((err) => {
              console.log(err);
            });
          
          
        }else if(match.url === '/shows/popular-show'){
          console.log('hier hole ich die daten von popular shows');    
  
          fetch(`https://imdb-api.com/API/MostPopularTVs/${process.env.REACT_APP_API_KEY}`)
            .then(response => {
              return response.json();
            })
            .then(result => {
              console.log(result.items);
              setShows(result.items);
            })
            .catch((err) => {
              console.log(err);
            });

        }
      // clean up action weil sonst endless loop

    }, [match]);
  

    if(match.url === '/shows/toptv' || match.url === '/shows/popular-show'){
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
                    <h1>{match.params.showname}</h1> 
                    <CardActionArea>
                        <CardMedia
                        className={classes.headlineContent}
                        />        
                        </CardActionArea>
                    </Card>

                </aside>
 
    <div className = {cardstyle.card_container}>

      {/* hier noch mit maps über tv items machhen und dann fertig--> daten noch an bild ünbergebn (weiter oben berschriben) */}

    	{shows.map((item) => 
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
          {/*!!!! hier ein parameter angeben damit wenn detail augerufen wird einfach api call gemacht werden kann */}
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