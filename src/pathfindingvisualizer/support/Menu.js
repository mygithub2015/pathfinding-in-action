import React, { Component } from "react";
import logo from "../../assets/images/app-icon.svg";
import settings from "../../assets/images/settings-icon.svg";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { visualizeDijkstra } from "../PathfindingVisualizer.jsx";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            algorithm: "Algorithms",
            maze: "Mazes & Patterns",
            clear: "Clear",
            speed: "Speed"
        }
        this.selectAlgorithm = this.selectAlgorithm.bind(this);
        this.selectMaze = this.selectMaze.bind(this);
        this.clearBoard = this.clearBoard.bind(this);
        this.adaptSpeed = this.adaptSpeed.bind(this);


    }
    selectAlgorithm = (e) => {
        console.log('selected algorithm option: ', e);
        this.setState({ algorithm: e });
    }
    selectMaze = (e) => {
        console.log('selected maze option: ', e);
        this.setState({ maze: e });
    }

    clearBoard = (e) => {
        console.log('selected clear option: ', e);
        this.setState({ clear: e });
    }

    adaptSpeed = (e) => {
        console.log('selected speed option: ', e);
        this.setState({ speed: e });
    }

    visualizeAlgorithm = () => {
        this.props.onClick();
    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo} width="24px" /> {' '}
                            <span id="app-name">Pathfinding Visualizer</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Item>
                                    <Nav.Link target="new" href="https://github.com/mygithub2015/pathfinding-in-action">GitHub</Nav.Link>
                                </Nav.Item>
                                <NavDropdown title={this.state.algorithm} id="collasible-nav-dropdown" onSelect={this.selectAlgorithm}  >
                                    <NavDropdown.Item eventKey="Dijkstra">Dijkstra's Algorithm</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="A*">A* Search</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Greedy BFS">Gready Best-first Search</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="BFS">Breadth-first Search</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="DFS">Depth-first Search</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="Algorithms">Reset</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={this.state.maze} id="collasible-nav-dropdown" onSelect={this.selectMaze}>
                                    <NavDropdown.Item eventKey="Recursive Division">Recursive Division</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Recursive Division (vertical Skew)">Recursive Division (vertical Skew)</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Recursive Division (horizontal Skew)">Recursive Division (horizontal Skew)</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Basic Random Maze">Basic Random Maze</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Basic Weight Maze">Basic Weight Maze</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Simple Stair Pattern">Simple Stair Pattern</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="Mazes & Patterns">Reset</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={this.state.clear} id="collasible-nav-dropdown" onSelect={this.clearBoard}>
                                    <NavDropdown.Item eventKey="Clear Path">Clear Path</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Clear Board">Clear Board</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Clear Walls & Weights">Clear Walls & Weights</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="Clear">Reset</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={this.state.speed} id="collasible-nav-dropdown" onSelect={this.adaptSpeed}>
                                    <NavDropdown.Item eventKey="Fast">Fast</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Normal">Normal</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Slow">Slow</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="Speed">Reset</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <div className="btn-visualize-container">
                                        <button  className="btn-visualize" onClick={this.visualizeAlgorithm}> Visualize {this.state.algorithm}!</button>                                  </div>
                                </Nav.Item>
                            </Nav>
                            <Nav className="settings-nav">
                                <Nav.Item>
                                    <div className="settings-icon">
                                        <Nav.Link target="new" href="#">
                                            <img href="#" src={settings} />
                                        </Nav.Link>


                                    </div>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        );
    }
}

export default Menu;