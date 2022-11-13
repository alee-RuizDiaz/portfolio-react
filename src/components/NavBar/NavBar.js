import './NavBar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const NavBar = () => {

const [click, setClick] = useState(false)
const [color, setColor] = useState(!click);

const handleClick = () => setClick(!click)

const changeColor = () => {
    if(window.scrollY >=100) {
        setColor(true)
    } else {
        setColor(false)
    }
}

window.addEventListener("scroll", changeColor)


return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link className='titleNavbar ms-lg-5 ms-3' to='/'>
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? 'navMenu active' : 'navMenu me-lg-5'}>
            <li>
                <Link to='/'>Inicio</Link>
            </li>
            <li>
                <Link to='/about'>Sobre Mi</Link>
            </li>
            <li>
                <Link to='/project'>Proyectos</Link>
            </li>
            <li>
                <Link to='/contact'>Contacto</Link>
            </li>
        </ul>
        <div className='hamburger me-3' onClick={handleClick}>
            {click
             ? (<FaTimes size={20} style={{color: '#fff'}}/>) 
             : (<FaBars size={20} style={{color: '#fff'}}/>)}
        </div>
    </div>
  )
}

export default NavBar