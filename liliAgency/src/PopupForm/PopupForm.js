import React from 'react';
import './PopupForm.css';



class PopupForm extends React.Component {
  constructor(props) {
    super(props);
    this.hidepopup = this.hidepopup.bind(this)
  }
  hidepopup() {
    document.getElementById('PopupForm').classList.remove("visible");
  }
  render() {
    return (
      <div id="PopupForm" className="PopupForm">
        <div className="PopupForm__form">
          <span onClick={this.hidepopup} className="PopupForm__close"></span>
          <form className="PopupForm__formIneer" method="post" action="">
            <div className="PopupForm__row">
              <div className="PopupForm__col">
                <label className="PopupForm__label">Your name:</label>
                <input className="PopupForm__field" type="text" />
              </div>
              <div className="PopupForm__col">
                <label className="PopupForm__label">Your email:</label>
                <input className="PopupForm__field" type="email" />
              </div>  
            </div>
            <div className="PopupForm__row">
              <div className="PopupForm__col--full">
                <label className="PopupForm__label">Your message:</label>
                <textarea className="PopupForm__field PopupForm__field--area"></textarea>
              </div>
            </div>
            <button className="PopupForm__btn">SEND</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupForm;


