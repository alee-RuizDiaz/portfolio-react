
import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home.js'
import About from './routes/About.js'
import Project from './routes/Project.js'
import Contact from './routes/Contact.js'
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import { ParticleBackground } from './components/ParticleBackground';


function App() {

  return (
    <div className="App">
        <ParticleBackground/>
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
