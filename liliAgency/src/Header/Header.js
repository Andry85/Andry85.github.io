import React from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import Btn from './Btn/Btn';
import Nav from './Nav/Nav';

class HeaderInner extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header__title">Creating beautiful sites.</h1>
        <Btn text="Get started" />
      </div>
      
    );
  }
}


class Header extends React.Component {
  render() {
    const isMainPage = this.props.isMainPage;
    console.log(isMainPage);
    
    let isheaderInner;
    let headerClass;

    if (isMainPage) {
      isheaderInner = <HeaderInner/>;
      headerClass = 'header';
    } else {
      isheaderInner = '';
      headerClass = 'header header__inner';
    }

    return (
      <header className={headerClass}>
        <div className="inner">
          <Logo name="Lily Web Agency"></Logo>
              {isheaderInner}
          <Nav />
        </div>
      </header>
    );
  }
}

export default Header;
