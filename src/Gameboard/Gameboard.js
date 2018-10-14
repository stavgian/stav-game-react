import React, { Component } from "react";
import TileRow from '../components/Board/TileRow'
import "./Gameboard.scss";


class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.boardOptions = {
      width: 6,
      height: 6,
      colors: ['#053582', '#7f0482', '#820414', '#824b04', '#7d8204', '#348204']
    };
    this.boardTiles = this.populateBoard();

    console.log(this.boardTiles);
  }



  populateBoard = () => {
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < this.boardOptions.width; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < this.boardOptions.height; j++) {
        children.push({
          active : false,
          position: {
            x: i,
            y: j
          },
          color: this.boardOptions.colors[
            Math.floor(Math.random() * this.boardOptions.colors.length)
          ]
        });
      }
      //Create the parent and add the children
      table.push(children);
    }
    table[0][0].active = true;
    return table;
  };


  render() {
    return (
      <div className="Gameboard">
        <h3>
          Gameboard ({this.boardOptions.width}x{this.boardOptions.height})
        </h3>
        <div className="GameboardTable">
          <div>
            {this.boardTiles.map(function(value, i) {
              return <TileRow value={value} key={i} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Gameboard;
