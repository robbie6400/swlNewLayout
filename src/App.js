import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import About from "./pages/About";
import Music from "./pages/Music";
import './css/App.css';

function App() {
  return (
    <div className="Application">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/shows" element={<Shows/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/music" element={<Music/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
