import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home.js";
import "@fortawesome/fontawesome-svg-core";
import Mobile from "./pages/mobile/mobile";

function App() {
  return (
    <div className="MobleCheck">
      <div id="Top"></div>
      <header className="Nav">
        <Navbar />
      </header>
      <div className="App">
        <div className="Content">
          <Home />
        </div>
        <div className="Mobile">
          <Mobile />
        </div>
      </div>
    </div>
  );
}

export default App;
