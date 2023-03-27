import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
