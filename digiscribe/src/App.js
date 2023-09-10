import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <Router>
      <div className="App">
      <div className="NavBar">
          <NavBar/>
       </div>

        <Routes>
          <Route exact path = "/" element={<Home />}/>
          <Route path = "/contact" element={<Home />}/>
          <Route path = "/sign-in" element={<Home />}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
