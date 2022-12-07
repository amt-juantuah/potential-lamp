import logo from './logo.svg';
import './App.css';
import Board from './Board.js';

function App() {
  return (
    <div className="App">
      <div class="name-container">
        <div class="neon"> Off </div>
        <div class="flux">The </div>
        <div class="neon"> Lights </div>
      </div>
      <Board />
    </div>
  );
}

export default App;
