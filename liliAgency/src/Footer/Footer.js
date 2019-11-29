import React from 'react';
import './Footer.css';



class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer__inner">
          <p className="footer__copy">© 2014–2019. All rights reserved.</p>
          <ul className="social">
            <li>
              <a className="social__instagram" href="#"></a>
            </li>
            <li>
              <a className="social__linkedin" href="#"></a>
            </li>
            <li>
              <a className="social__behance" href="#"></a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;


