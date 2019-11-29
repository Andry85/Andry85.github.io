import React from 'react';
import Slider from "react-slick";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


import ifs_01 from './Img/ifs_01.jpg';
import ifs_02 from './Img/ifs_02.jpg';

import vuk_01 from './Img/vuk_01.jpg';
import vuk_02 from './Img/vuk_02.jpg';

import mi_01 from './Img/mi_01.jpg';
import mi_02 from './Img/mi_02.jpg';


class SliderList extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            dots: true,
            arrows: false,
          }
        },
      ]
    };
    return (
      <Slider {...settings}>
        <div className="sliderList__item">
          <div className="sliderList__itemInner">    
              <div className="sliderList__col_1">
                <h3 className="sliderList__title">“IFS”</h3>
                <p className="sliderList__text">IFS is a boutique international tax practice based in central London specifically created to assist entrepreneurial clients with innovative long term commercial structures for their businesses.</p>
                <PrewWorkLink to="/content/ifs" label="detail..." />
                <div className="sliderList__lines">
                  <span className="first-el"></span>
                  <span className="second-el"></span>
                  <span></span>
                </div>
              </div>
              <div className="sliderList__col_2">
                <ul className="portfolioList">
                  <li className="portfolioList__item">
                    <figure>
                      <img src={ifs_01} alt="" />
                    </figure>
                  </li>
                  <li className="portfolioList__item">
                    <figure>
                      <img src={ifs_02} alt="" />
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div> 

          <div className="sliderList__item">
            <div className="sliderList__itemInner">   
              <div className="sliderList__col_1">
                <h3 className="sliderList__title">Vitukraina</h3>
                <p className="sliderList__text">"VIT-UKRAINE" specializes in the production and implementation of road's bitumen emulsion.</p>
                <PrewWorkLink to="/content/vitukraina" label="detail..." />
                <div className="sliderList__lines">
                  <span className="first-el"></span>
                  <span className="second-el"></span>
                  <span></span>
                </div>
              </div>
              <div className="sliderList__col_2">
                <ul className="portfolioList">
                  <li className="portfolioList__item">
                    <figure>
                      <img src={vuk_01} alt="" />
                    </figure>
                  </li>
                  <li className="portfolioList__item">
                    <figure>
                      <img src={vuk_02} alt="" />
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div> 


          <div className="sliderList__item">
            <div className="sliderList__itemInner">   
              <div className="sliderList__col_1">
                <h3 className="sliderList__title">Mehinvest</h3>
                <p className="sliderList__text">Ltd. "Mehinvest" specializes in the manufacture and sale of traffic management tools, such as: traffic signs, road performance, safety spherical mirrors, zinc-coate racks devices forced reduction in speed "sleeping policemen", signaling traffic cones.</p>
                <PrewWorkLink to="/content/mehinvest" label="detail..." />
                <div className="sliderList__lines">
                  <span className="first-el"></span>
                  <span className="second-el"></span>
                  <span></span>
                </div>
              </div>
              <div className="sliderList__col_2">
                <ul className="portfolioList">
                  <li className="portfolioList__item">
                    <figure>
                      <img src={mi_01} alt="" />
                    </figure>
                  </li>
                  <li className="portfolioList__item">
                    <figure>
                      <img src={mi_02} alt="" />
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        
      </Slider>
    );
  }
}

export default SliderList;


function PrewWorkLink({ label, to}) {

  return (
    <div className="sliderList__btnWrap">
      <Link to={to}>{label}</Link>
    </div>
  );
}

