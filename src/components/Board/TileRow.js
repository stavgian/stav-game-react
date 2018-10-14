import React, { Component } from "react";

class TileRow extends React.Component {   
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  
  
  render() {
      return (
          <ul> 
          {this.props.value.map(function(value1, i) {
            return <li style={{backgroundColor : value1.color}} key={i} className={"tileBox " + (value1.active ? 'active' : '')}>
            <span>{value1.position.x }.{ value1.position.y }</span>
            </li>;
          })}
          </ul>
      );
  }
}

export default TileRow;