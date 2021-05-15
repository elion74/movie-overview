import React, { useDebugValue, useEffect, useState} from 'react';
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

export default function Events({match}){

    const classes = useStyles();
    const [oscarevents, setOscarEvents] = useState([]);


    useEffect(() => {

        if(match.url === 'events/oscars'){
            console.log('hier hole daten von events osacrs api');
            // api call und daten in state
        }else if(match.url === 'events/emmys'){
            console.log('hier hole ich daten von emmy events');
        }
        
    });
    // selbe comment wie bei anderen also dependency in useEffect
    

    if(match.url === '/shows/ontv' || match.url === '/shows/popular-show'){
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

      {/* hier noch mit maps über movies state  machhen und dann fertig--> daten noch an bild ünbergebn (weiter oben berschriben) */}

    {/* {oscarevents.map((item) =>  */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            // image={item.image}
            alt = 'sorry no image'
            // title={item.title}
          />
        </CardActionArea>
        <CardActions>  
          <Button size="small" className={classes.margin}>
          {/*!!!! hier ein parameter angeben damit wenn detail augerufen wird einfach api call gemacht werden kann */}
              {/* weil sonst weiss man nicht welche daten man holen soll aus api */}
              {/* <Link  to = {`/details/${item.id}`} style={{ textDecoration: 'none', display: 'block', color:'black'}}>See More</Link> */}
          </Button>

        </CardActions>
      </Card>
    {/* )} */}

    </div>

</div>
);
}