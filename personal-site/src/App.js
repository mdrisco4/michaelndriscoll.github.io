import React/* { Component }*/ from "react";
import './App.css';
// import Home from './Components/Home.js'
import Portfolio from './Components/Portfolio.js'
import ContactInfo from './Components/ContactInfo.js'
// import About from './Components/About.js'

function App() {
  return (
    <div className="App">
      <header className='header nav-menu'>
        <div className="intro">
          <h1 className='name'>Michael Driscoll</h1>
          <img src='' alt='' className='photo'></img>
          <nav className='header-links'>
            <h4>RESUME</h4>
            <h4>LINKEDIN</h4>
            <h4>GITHUB</h4>
            <h4>CONTACT</h4>
            <h4>ABOUT</h4>
          </nav>
        </div>
      </header>
      <main>
      {/* <Home/> */}
      <Portfolio/>
      <ContactInfo/>
      {/* <About/> */}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
