import React from 'react';
import './Work.css';




class Work extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
      <div className="work-wrap">
        <h2 className="work__title">{this.props.title}</h2>
        <p className="work__desk">{this.props.desk}</p>
        <ul className="workList">
          {this.props.images}
        </ul>
        <div className="work__visit">
          Visit: <a className="work__url" href={this.props.urlLink} target="_blank">{this.props.urlText}</a>
        </div>
        
      </div>
    );
  }
}

export default Work;


