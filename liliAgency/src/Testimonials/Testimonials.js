import React from 'react';
import './Testimonials.css';
import TestimonialList from './TestimonialList/TestimonialList';


class Testimonials extends React.Component {
  render() {
    return (
        <div id="testimonials" className="testimonialsOuter">
          <div className="testimonialsWrap">
            <h2 className="testimonialsWrap__title">Testimonials</h2>
            <div className="testimonialsWrap__inside">
              <TestimonialList/>
            </div>
          </div> 
        </div> 
    );
  }
}

export default Testimonials;
