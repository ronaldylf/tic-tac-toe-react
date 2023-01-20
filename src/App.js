import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <h1 className='main-title'> Tic Tac Toe with reactJS </h1>
      <Game/>
    </div>
  );
}

export default App;
