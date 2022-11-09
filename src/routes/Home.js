import React from 'react'
import Footer from '../components/Footer/Footer.js'
import NavBar from '../components/NavBar/NavBar.js'
import VideoHome from '../components/VideoHome/VideoHome.js'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <VideoHome/>
      <Footer/>
    </div>
  )
}

export default Home