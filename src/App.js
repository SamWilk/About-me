import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home.js";
import "@fortawesome/fontawesome-svg-core";

function App() {
  return (
    <div>
      <div id="Top"></div>
      <header className="Nav">
        <Navbar />
      </header>
      <div className="App">
        <div className="Content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
