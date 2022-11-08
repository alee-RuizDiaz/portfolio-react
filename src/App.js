
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home.js'
import About from './routes/About.js'
import Project from './routes/Project.js'
import Contact from './routes/Contact.js'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>ERROR 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
