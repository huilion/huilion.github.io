import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About.jsx'  
import NavBar  from './components/NavBar.jsx'
import Projects  from './components/Projects.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    useEffect(() => {
    document.body.style.backgroundColor = '#ebe8e5';

    return () => {
      document.body.style.backgroundColor = null; // Reset on unmount
    };
  }, []);

  return (
    <>
      <NavBar/>
      <About/>
      <Projects/>
    </>
  )
}

export default App
