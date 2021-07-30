import logo from './logo.svg';
import './assets/styles/css/style.css';

function App() {
  return (
    <div className="text-center bg-gray-500">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-6xl text-white">
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
