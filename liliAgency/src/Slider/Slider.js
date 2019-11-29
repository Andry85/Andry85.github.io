import React from 'react';
import './Slider.css';
import SliderList from './SliderList/SliderList';

class Slider extends React.Component {
  render() {
    return (
        <div id="portfolio" className="sliderWrap">
          <div className="inner">
            <h2 className="sliderWra__title">Our works</h2>
            <div className="sliderOuter">
              <div className="sliderListWrap">
                <div className="sliderList">
                  <SliderList/>
                </div>
              </div>
            </div>    
          </div>
        </div>  
    );
  }
}

export default Slider;
