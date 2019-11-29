import React from 'react';
import Slider from "react-slick";
import './TestimonialList.css';


import client_1 from './img/rufer.png';



class TestimonialList extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
            arrows: false,
          }
        },
      ]
    };
    return (
      <Slider {...settings}>
        
        <div className="testimonialsList__slide">
          <div className="testimonialsList__inner">
            <figure className="testimonialsList__avatar">
              <img src={client_1} />
            </figure> 
            <div className="testimonialsList__desc">
              <p>Successfully closed with Prostosite project, everything was done on time, in addition some small wishes were made on my part!</p>
            </div> 
            <h3 className="testimonialsList__author">Sergey Ruhrer</h3> 
            <span className="testimonialsList__position">CEO "Antonina"+</span>
          </div> 
        </div> 

        <div className="testimonialsList__slide">
          <div className="testimonialsList__inner">
            <figure className="testimonialsList__avatar">
              <img src={client_1} />
            </figure> 
            <div className="testimonialsList__desc">
              <p>Successfully closed with Prostosite project, everything was done on time, in addition some small wishes were made on my part!</p>
            </div> 
            <h3 className="testimonialsList__author">Sergey Ruhrer</h3> 
            <span className="testimonialsList__position">CEO "Antonina"+</span>
          </div> 
        </div> 

        <div className="testimonialsList__slide">
          <div className="testimonialsList__inner">
            <figure className="testimonialsList__avatar">
              <img src={client_1} />
            </figure> 
            <div className="testimonialsList__desc">
              <p>Successfully closed with Prostosite project, everything was done on time, in addition some small wishes were made on my part!</p>
            </div> 
            <h3 className="testimonialsList__author">Sergey Ruhrer</h3> 
            <span className="testimonialsList__position">CEO "Antonina"+</span>
          </div> 
        </div> 

      </Slider>
    );
  }
}

export default TestimonialList;
