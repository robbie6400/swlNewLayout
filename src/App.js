import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Merch from "./pages/Merch";
import Music from "./pages/Music";
import './css/App.css';

function App() {
  return (
    <div className="Application">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/merch" element={<Merch/>} />
              <Route path="/music" element={<Music/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
