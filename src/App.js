import logo from './assets/images/app-icon.svg';
import './styles/pathfinding.css'


function App() {
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

export default App;
