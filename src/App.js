import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Music from "./pages/Music";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Merch from "./pages/Merch";

import './css/App.css';

function App() {
  return (
    <div className="Application">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/music" element={<Music/>} />
              <Route path="/photos" element={<Photos/>} />
              <Route path="/videos" element={<Videos/>} />
              <Route path="/contact" element={<Contact/>} />

              <Route path="/merch" element={<Merch/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
