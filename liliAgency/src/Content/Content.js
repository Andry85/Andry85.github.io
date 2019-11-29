import React from 'react';
import './Content.css';
import Work from './Work/Work';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ifs_big_pic_01 from './Work/img/ifs/ifs_01.png';
import ifs_big_pic_02 from './Work/img/ifs/ifs_02.png';
import ifs_big_pic_03 from './Work/img/ifs/ifs_03.png';

import vitukraina_big_pic_01 from './Work/img/vitukraina/vitukraina_01.png';
import vitukraina_big_pic_02 from './Work/img/vitukraina/vitukraina_02.png';
import vitukraina_big_pic_03 from './Work/img/vitukraina/vitukraina_03.png';

import mehinvest_big_pic_01 from './Work/img/mehinvest/mehinvest_01.png';
import mehinvest_big_pic_02 from './Work/img/mehinvest/mehinvest_02.png';
import mehinvest_big_pic_03 from './Work/img/mehinvest/mehinvest_03.png';


const works = [
  {
    id: 1, 
    title: 'Ifs', 
    desk: 'Task: Create a website for an UK consulting company.',
    urlLink:'http://www.interfis.com/',
    urlText:'www.interfis.com',
    pictures: [
      ifs_big_pic_01,
      ifs_big_pic_02,
      ifs_big_pic_03
    ]
  },
  { 
    id: 2, 
    title: 'VitUkraina', 
    desk: 'Task: Create a website for an Ukranian building company.',
    urlLink:'https://vitukraina.com.ua/en/home/',
    urlText:'www.vitukraina.com.ua',
    pictures: [
      vitukraina_big_pic_01,
      vitukraina_big_pic_02,
      vitukraina_big_pic_03
    ]
  },
  { 
    id: 3, 
    title: 'Mehinvest', 
    desk: 'Task: Create a website for a roads building company.',
    urlLink:'http://mehinvest.com.ua/',
    urlText:'www.mehinvest.com.ua',
    pictures: [
      mehinvest_big_pic_01,
      mehinvest_big_pic_02,
      mehinvest_big_pic_03
    ]
  }
];



class Content extends React.Component {
  render() {
    const content_1 = works[0].pictures.map((img) =>
      <li key={img.toString()}>
        <img src={img} />
      </li>
    );
    const content_2 = works[1].pictures.map((img) =>
      <li key={img.toString()}>
        <img src={img} />
      </li>
    );
    const content_3 = works[2].pictures.map((img) =>
      <li key={img.toString()}>
        <img src={img} />
      </li>
    );
    return (
      <Router>
        <div className="content">
          <Switch>
              <Route path="/content/ifs">  
                <Work title={works[0].title} desk={works[0].desk} urlLink={works[0].urlLink} urlText={works[0].urlText} images={content_1}/>
              </Route>
              <Route path="/content/vitukraina">
                <Work title={works[1].title} desk={works[1].desk} urlLink={works[1].urlLink} urlText={works[1].urlText} images={content_2}/>
              </Route>
              <Route path="/content/mehinvest">
                <Work title={works[2].title} desk={works[2].desk} urlLink={works[2].urlLink} urlText={works[2].urlText} images={content_3}/>
              </Route>
          </Switch>
        </div>
      </Router>
      
        
    );
  }
}

export default Content;


