import logo from './logo.svg';
import './App.css';
import Board from './Board.js';

function App() {
  return (
    <div className="App">
      <div class="name-container">
        <div class="neon">Neon </div>
        <div class="flux">Flux </div>
      </div>
      <Board />
    </div>
  );
}

export default App;
