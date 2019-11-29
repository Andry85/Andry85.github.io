import React from 'react';
import './MapContainer.css';



class MapContainer extends React.Component {
  render() {
    return (
      <section id="contacts" className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.2955676257193!2d28.469708615879124!3d49.23288518221843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b7ace9b7b29%3A0xd7975147bfc54cc2!2sSoborna%20St%2C%2024%2C%20Vinnytsia%2C%20Vinnyts&#39;ka%20oblast%2C%2021000!5e0!3m2!1sen!2sua!4v1574957217934!5m2!1sen!2sua" allowfullscreen=""></iframe>
        <div className="map__inner">
          <ul className="mapList">
            <li>
              <div className="mapList__title">
                  <span className="addres_icon"></span>
                  Address
              </div>
              <p>24, Soborna street, Vinnytsia, Vinnytsia region, 21050</p>
            </li>
            <li>
              <div className="mapList__title">
                  <span className="phone_icon"></span>
                  Phone
              </div>
              <p>+38068328541</p>
            </li>
            <li>
              <div className="mapList__title">
                  <span className="email_icon"></span>
                  E-mail
              </div>
              <p>lilyagency@gmail.com</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default MapContainer;


