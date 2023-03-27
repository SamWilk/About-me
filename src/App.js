import "./App.css";
import Navbar from "./components/navbar/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about-me",
    element: <Aboutme />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="Content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
