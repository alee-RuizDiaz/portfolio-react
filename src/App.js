
import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home.js'
import About from './routes/About.js'
import Project from './routes/Project.js'
import Contact from './routes/Contact.js'

function App() {

  return (
    <div className="App">
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
