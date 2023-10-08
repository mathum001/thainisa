import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Kinna } from "./pages/kinna";
import { Backa } from "./pages/backa";
import { Minten } from "./pages/minten";
import { Menu } from "./pages/menu";
import "./App.css";
import { HomeHeader } from "./components/header";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <HomeHeader />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/backa" element={<Backa />} />
        <Route path="/kinna" element={<Kinna />} />
        <Route path="/minten" element={<Minten />} />
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </>
  );
}

export default App;
