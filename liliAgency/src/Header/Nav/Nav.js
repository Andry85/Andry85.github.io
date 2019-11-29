import React from 'react';
import './Nav.css';


class NavElement extends React.Component {
  constructor(props) {
    super(props)

    
  }

  render() {
    return (
      <li className="nav__item" onClick={this.props.action}>
        <a className="nav__link" href={this.props.elentHref}>{this.props.elentText}</a>
      </li>
    );
  }
}



class NavBtn extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div onClick={this.props.action} className= {this.props.classNameIs ? "navWrap__mobileMenu opened" : "navWrap__mobileMenu"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}


class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this);
    this.ToggleMobilemenu = this.ToggleMobilemenu.bind(this);
    
    this.state = {
      listElements: [
        { elId: 1, elentHref: "/", elentText: "Home"},
        { elId: 2, elentHref: "/#portfolio", elentText: "Portfolio"},
        { elId: 3, elentHref: "/#team", elentText: "Team"},
        { elId: 4, elentHref: "/#testimonials", elentText: "testimonials"},
        { elId: 5, elentHref: "/#contacts", elentText: "Contacts"},
      ],
      mobileMenuIsHidden: true,
      condition: false,
      isClicked: false
    };

  }
  ToggleMobilemenu() {
    this.setState({
      mobileMenuIsHidden: !this.state.mobileMenuIsHidden,
      condition: !this.state.condition,
    });
    if(this.state.isClicked == true) {
      this.setState({
        isClicked: false,
      });

      console.log(`isClicked: ${this.state.isClicked}`);
    }

    
  }

  handler() {
      this.setState({
        isClicked: !this.state.isClicked,
        condition: false,
        mobileMenuIsHidden: !this.state.mobileMenuIsHidden
      });
      console.log(`isClicked: ${this.state.isClicked}`);
  }

  


  render() {
   
  
    var listItems = this.state.listElements.map(e => (
      <NavElement action={this.handler} key={e.elId} elentHref={e.elentHref} elentText={e.elentText} />
    ));


      return (
        <div className="navWrap">
          
          
          <div className="hide-mobile">
            <ul className="nav">
              {listItems}
            </ul>
          </div>
          <div className="hide-desktop">
            <NavBtn action={this.ToggleMobilemenu} classNameIs={this.state.condition} />
          {
              !this.state.mobileMenuIsHidden && !this.state.isClicked
              ? 
              <ul className="nav">
                  {listItems}
              </ul>
              : ''
   
          }
          </div>  
        </div>
      );


    }
    

}

export default Nav;

