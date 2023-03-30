import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home.js";
import "@fortawesome/fontawesome-svg-core";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="Content">
        <Home />
      </div>
    </div>
  );
}

export default App;
