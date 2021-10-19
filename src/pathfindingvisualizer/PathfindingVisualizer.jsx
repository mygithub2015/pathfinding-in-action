import React, { Component } from "react";
import "./PathfindingVisualizer.css";
import Menu from "./support/Menu.js"


export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <Menu></Menu>
                </div>
            </>
        );
    }
}
