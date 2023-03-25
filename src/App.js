import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./Pokemon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do what you want
        </a>
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
