import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route extract path="/" element={<Home />} />
            <Route extract path="/login" element={<Login />} />
            <Route extract path="/signup" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
