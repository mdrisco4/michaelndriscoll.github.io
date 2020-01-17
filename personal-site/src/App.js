import React, { Component } from "react";
import './App.css';
import Home from './Components/Home.js'
import Portfolio from './Components/Portfolio.js'
import ContactInfo from './Components/ContactInfo.js'
import About from './Components/About.js'

function App() {
  return (
    <div className="App">
      <h1>My Site</h1>
      <Home></Home>
      <Portfolio></Portfolio>
      <ContactInfo></ContactInfo>
      <About></About>
    </div>
  );
}

export default App;
