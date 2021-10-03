import logo from "../../assets/images/app-icon.svg";

function Logo() {
    return (
        <>
            <div className="logo-container">
                <div id="logo">
                    <img className="app-icon" src={logo} />
                </div>
                <div className="app-name">
                    <span >Pathfinding Visualizer</span>
                </div>
            </div>
        </>
    );
}

export default Logo;