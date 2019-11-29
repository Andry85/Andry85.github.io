import React from 'react';
import './Logo.css';

class Logo extends React.Component {
  render() {
    return (
      <a href="/" className="logo">
        <span className="logo__text">{this.props.name}</span>
      </a>
    );
  }
}

export default Logo;
