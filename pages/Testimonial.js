import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import './Testimonial.css';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
         
          <div className="myCarousel">
            <h3>Shirley Jonh</h3>
            <h4>Customer</h4>
            <p>
            Excellent and professional service. Have used twice and highly recommend –
            polite delivery Person on each occasion and punctual.
            </p>
          </div>
        </div>

        <div>
   
          <div className="myCarousel">
            <h3>Daniel Josheph</h3>
            <h4>Customer</h4>
            <p>
            Great service, picked up on time, keep me informed at each stage and delivered securely and on time.
             Great value too
            </p>
          </div>
        </div>
        <div className="myCarousel">
            <h3>Swetha Ratnam</h3>
            <h4>Customer</h4>
            <p>
            Amazing service, arrived early, delivered perfectly on-time.
           Polite, friendly and accommodating in difficult times, and very reasonably priced.
            </p>
          </div>
        <div>
         

        </div>
      </Carousel>
    );
  }
}