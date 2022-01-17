import React, { Component } from "react";
import "./Node.css";

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      isWall,
      isStart,
      isEnd,
      isVisited,
      isShortestPath,
      onMouseDown,
      row,
      col,
      onMouseEnter,
      onMouseUp,
      onMouseLeave,
    } = this.props;
    const cName = isStart
      ? "node-start"
      : isEnd
      ? "node-end"
      : isWall
      ? "node-wall"
      : isShortestPath
      ? "node-shortest-path"
      : isVisited
      ? "node-visited"
      : "";
    return (
      <td
        className={`node ${cName} grid-cell`}
        id={`node-${row}-${col}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
        onMouseLeave={() => onMouseLeave(row, col)}
      ></td>
    );
  }
}
export default Node;
