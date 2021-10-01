import React, { Component } from "react";
import "./PathfindingVisualizer.css";
import logo from "../assets/images/app-icon.svg";


export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="parent">
                <div class="logo-container">
                    <div id="logo">
                        <img class="app-icon" src={logo} />
                    </div>
                    <div class="app-name">
                        <span >Pathfinding Visualizer</span>
                    </div>
                </div>
            </div>
        );
    }
}