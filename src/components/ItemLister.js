import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import * as carouselstyle from './carousel.module.css';


export default function ItemLister({item}){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1,  // optional, default to 1.
        }
    };

    return(
    <div className  = {carouselstyle.img_container}>
        <Carousel
        ssr = {true}
        // evtl item class hinzufügen mit padding 10px;
        // itemClass={carouselstyle.slider_image_item}
        autoPlaySpeed={1000}
        transitionDuration={500}
        centerMode={false}
        containerClass="container"
        draggable = {false}
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        swipeable = {false}
        >

        {
          item.map((item) => 
          <div>
           <img  className = {carouselstyle.img} src = {item.image} alt =''/>
           <p className  = {carouselstyle.actor_name}>{item.name}</p>
          </div>
          )
        }

        </Carousel>
    </div>   
    );
}