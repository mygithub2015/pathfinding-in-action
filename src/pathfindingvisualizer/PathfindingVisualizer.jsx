import React, { Component } from "react";
import "./PathfindingVisualizer.css";
import Menu from "./support/Menu.js";
import Node from "./support/Node.js";
import { Button } from "react-bootstrap"
import logo from "../assets/images/app-icon.svg";
import startnode from "../assets/images/start-node.svg";
import targetnode from "../assets/images/target-node.svg";
import bombnode from "../assets/images/bomb-node.svg";
import weightnode from "../assets/images/weight-node.svg";
import wallnode from "../assets/images/wall-node.svg";
import unvisitednode from "../assets/images/unvisited-node.svg";
import visitednodeyellow from "../assets/images/visited-node-yellow.svg";
import visitednodered from "../assets/images/visited-node-red.svg";
import shortestpath from "../assets/images/shortest-path.svg";

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            mouseClicked: false,
            mainClicked: "",
            start_node: null,
            end_node: null,
            visited: 0,
            shortestPath: 0,
            number_of_nodes: 0
        }
        this.animating = false;
    }

    makeGrid = () => {
        if (this.animating) return;
        let row_size = Math.floor((window.innerHeight - 60) / 27);
        let col_size = Math.floor((window.innerWidth) / 27);
        let arr = []
        for (let i = 0; i < row_size; i++) {
            let row = [];
            for (let j = 0; j < col_size; j++) {
                row.push({
                    value: 1,
                    row: i,
                    col: j,
                    isVisited: false,
                    isShortestPath: false,
                    isWall: false,
                    isShortestPath: false
                });
                try {
                    document.getElementById(`node-${i}-${j}`).className = "node_";
                } catch {
                }

            }
            arr.push(row);
        }
        let start_x = Math.floor(Math.random() * row_size);
        let start_y = Math.floor(Math.random() * col_size);
        let end_x = Math.floor(Math.random() * row_size);
        let end_y = Math.floor(Math.random() * col_size);
        arr[start_x][start_y].isStart = true;
        arr[end_x][end_y].isEnd = true;

        this.setState({
            grid: arr,
            start_node: [start_x, start_y],
            end_node: [end_x, end_y],
            number_of_nodes: arr.length * arr[0].length,
            visited: 0,
            shortestPath: 0
        })

    }
    componentDidMount() {
        this.makeGrid();
        window.addEventListener("resize", (e) => {
            this.makeGrid();
        })
    }
    handleMouseDown = (row, col) => {
        if (this.animating) return;
        let arr = this.state.grid;
        if (arr[row][col].isStart) {
            this.setState({
                mainClicked: "start"
            })
        }
        else if (arr[row][col].isEnd) {
            this.setState({
                mainClicked: "end"
            })
        }
        if (!arr[row][col].isWall && !arr[row][col].isStart && !arr[row][col].isEnd)
            arr[row][col].isWall = true;
        else if (arr[row][col].isWall) {
            arr[row][col].isWall = false;
        }
        this.setState({
            grid: arr,
            mouseClicked: true
        })
    }
    handleMouseEnter = (row, col) => {
        if (this.animating) return;
        if (this.state.mouseClicked) {
            let arr = this.state.grid;
            if (this.state.mainClicked == "start") {
                arr[row][col].isStart = true;
                this.setState({
                    start_node: [row, col]
                })
            }
            else if (this.state.mainClicked == "end") {
                arr[row][col].isEnd = true;
                this.setState({
                    end_node: [row, col]
                })
            }
            else if (!arr[row][col].isWall && !arr[row][col].isStart && !arr[row][col].isEnd)
                arr[row][col].isWall = true;
            else if (arr[row][col].isWall) {
                arr[row][col].isWall = false;
            }
            this.setState({
                grid: arr,
                mouseClicked: true
            })
        }

    }
    handleMouseLeave = (row, col) => {
        if (this.animating) return;
        let arr = this.state.grid;
        if (this.state.mainClicked != "") {
            arr[row][col].isStart = 0;
            arr[row][col].isEnd = 0;
            this.setState({
                grid: arr
            })
        }

    }
    handleMouseUp = () => {

        if (this.animating) return;
        this.setState({
            mouseClicked: false,
            mainClicked: ""
        })
    }
    isInsideGrid = (i, j) => {
        return (i >= 0 && i < this.state.grid.length && j >= 0 && j < this.state.grid[0].length);
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <Menu></Menu>

                    <div className="inner-header">
                        <div className="node-section">
                            <div className="desc-icon-container">
                                <div id="logo">
                                    <img className="app-icon" src={startnode} width="24px"/>
                                </div>
                                <div className="desc-icon-text">
                                    <span>Start Node</span>
                                </div>
                            </div>
                            <div className="desc-icon-container">
                                <div id="logo">
                                    <img className="app-icon" src={targetnode} width="24px"/>
                                </div>
                                <div className="desc-icon-text">
                                    <span>Target Node</span>
                                </div> 
                            </div>
                            <div className="desc-icon-container">
                                <div id="logo">
                                    <img className="app-icon" src={bombnode} width="24px"/>
                                </div>
                                <div className="desc-icon-text">
                                    <span>Bomb Node</span>
                                </div>
                            </div>
                            <div className="desc-icon-container">
                                <div id="logo">
                                    <img className="app-icon" src={weightnode} width="24px"/>
                                </div>
                                <div className="desc-icon-text">
                                    <span>Weight Node</span>
                                </div>
                            </div>
                            <div className="desc-icon-container">
                                <div id="logo">
                                    <img className="app-icon" src={wallnode} width="24px"/>
                                </div>
                                <div className="desc-icon-text">
                                    <span>Wall Node</span>
                                </div>
                            </div>
                            <div className="desc-icon-container">
                                <div id="logo">
                                    <img className="app-icon" src={unvisitednode} width="24px"/>
                                </div>
                                <div className="desc-icon-text">
                                    <span>Unvisited Node</span>
                                </div>
                            </div>
                            <div className="desc-icon-container">
                                <div className="visited-icons">
                                    <div id="logo">
                                        <img className="app-icon" src={visitednodeyellow} width="24px"/>
                                    </div>
                                    <div id="logo">
                                        <img className="app-icon" src={visitednodered} width="24px"/>
                                    </div>
                                </div>                                
                                <div className="visited-node-text">
                                    <span>Visited Node</span>
                                </div>
                            </div>
                            <div className="desc-icon-container">
                                <div id="logo">
                                    <img className="app-icon" src={shortestpath} width="24px"/>
                                </div>
                                <div className="desc-icon-text">
                                    <span>Shortest-Path Node</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-section flex-item">
                            <table className="grid-table">
                                <tbody>
                                    {
                                        this.state.grid.map((row, index) => {
                                            return (
                                                <tr className="grid-row" style={{ display: "table-row" }}>
                                                    {
                                                        row.map((element, i) => {
                                                            return (
                                                                <Node
                                                                    value={element}
                                                                    isWall={element.isWall}
                                                                    isStart={element.isStart}
                                                                    isEnd={element.isEnd}
                                                                    isVisited={element.isVisited}
                                                                    isShortestPath={element.isShortestPath}
                                                                    key={i}
                                                                    row={index}
                                                                    col={i}
                                                                    onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                                                                    onMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
                                                                    onMouseUp={() => this.handleMouseUp()}
                                                                    onMouseLeave={(row, col) => this.handleMouseLeave(row, col)}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </tr>

                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <footer>
                        <div className="footer">
                            <div className="footer">
                                <Button variant="info">Tutorial</Button>
                                <Button className="result" variant="info">Visualization!</Button>
                            </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}
