import React from 'react';
import './Btn.css';

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.showpopup = this.showpopup.bind(this)
  }
  showpopup(e) {
    e.preventDefault();
    document.getElementById('PopupForm').classList.add("visible");
  }
  render() {
    return (
      <a onClick={this.showpopup} href="/" className="btn">
        <span>{this.props.text}</span>
      </a>
    );
  }
}

export default Btn;
