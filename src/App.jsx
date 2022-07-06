import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";

import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./config/Routes";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
