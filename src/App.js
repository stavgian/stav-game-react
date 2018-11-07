import React, { Component } from 'react';
import './App.css';
import { Graph } from './Graph';
import Grid from './components/Grid/Grid';
import ColorPickers from './components/ColorPickers/ColorPickers';

const SIZE = 6;
const COLORS = ['blue','red','green','yellow','orange','purple','navy','aqua','maroon','pink'];


class App extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.sliderInput = this.sliderInput.bind(this);
    this.restart = this.restart.bind(this);
    this.colorFill = this.colorFill.bind(this);
    this.state = {
      size: SIZE,
      graph: new Graph(SIZE),
      colors: COLORS,
      count: 0,
    }
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  restart() {
    this.setState({
      graph: new Graph(this.state.size),
      count: 0
    });
  }

  colorFill(color) {
    this.state.graph.colorFill(color);
  }


  sliderInput(value) {
    this.setState({
      size: value,
      graph: this.newGrid(value, this.state.colors),
      count: 0
    });
  }

  render() {
    return (
        <div className="content">
          <div className="header">
            <h1>Color Flood</h1>
            <div className="newgame" onClick={(e) => this.restart()}>New Game</div>
            <div className="count">Changes <span>{this.state.count}</span></div>
          </div>
            <div><ColorPickers colors={this.state.colors} clickHandler={this.colorFill} incrementCount={this.incrementCount}/></div>
          <Grid grid={this.state.graph} colors={this.state.colors} size={this.state.size}/>
        </div>
    );
  }
}


export default (App);
