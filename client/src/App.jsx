import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Dogs from "./pages/Dogs";
import Dog from "./pages/Dog";
import Post from "./pages/Post";
import DogAdop from "./pages/DogAdop";
import Adop from "./pages/Adop";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route extract path="/" element={<Home />} />
            <Route extract path="/login" element={<Login />} />
            <Route extract path="/signup" element={<Register />} />
            <Route extract path="/products" element={<Products />} />
            <Route extract path="/dogs" element={<Dogs />} />
            <Route extract path="/dog-adop/:id" element={<DogAdop />} />
            <Route extract path="/dog/:id" element={<Dog/>} />
            <Route extract path="/post" element={<Post/>} />
            <Route extract path="/adop" element={<Adop/>} />
            <Route extract path="/product/:id" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
