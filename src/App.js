import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar.js";

import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
