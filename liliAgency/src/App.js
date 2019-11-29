import React from 'react';
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Team from './Team/Team';
import Testimonials from './Testimonials/Testimonials';
import MapContainer from './MapContainer/MapContainer';
import Footer from './Footer/Footer';
import PopupForm from './PopupForm/PopupForm';
import Content from './Content/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">  
            <div className="wrap">
              <Header isMainPage={true}/>
              <Slider/>
              <Team/>
              <Testimonials/>
              <MapContainer/>
              <Footer/>
              <PopupForm/>
            </div>
          </Route>
          <Route path="/content/">
            <div className="wrap">
                <Header isMainPage={false} />
                <Content/>
                <Footer/>
                <PopupForm/>
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
