
import React, { useState } from 'react';
import './index.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home.js'
import About from './routes/About.js'
import Project from './routes/Project.js'
import Contact from './routes/Contact.js'
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import Preloader from './components/Preloader/Preloader';



function App() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 2500)

    return () => clearTimeout(timer)

  }, [])

  return (
    <div className="App estrellas">
        <Preloader load={load}/>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>ERROR 404</h1>}/>
        </Routes>
    </div>
  );
}

export default App;
