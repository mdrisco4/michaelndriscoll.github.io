import React/* { Component }*/ from "react";
import './App.css';
import Home from './Components/Home.js'
import Portfolio from './Components/Portfolio.js'
import ContactInfo from './Components/ContactInfo.js'
import About from './Components/About.js'

function App() {
  return (
    <div className="App">
      <header className='header nav-menu'>
        <h1>Michael Driscoll</h1>
        <nav>
          <p>social media</p>
          <p>stuff</p>
          <p>things</p>
        </nav>
      </header>
      <main>
      <Home></Home>
      <Portfolio></Portfolio>
      <ContactInfo></ContactInfo>
      <About></About>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
