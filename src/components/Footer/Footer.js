import './Footer.css'
import { FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='footerContainer p-5'>
            <div className='left'>
                <div className='phone'>
                    <h4>
                        <FaPhone className='my-lg-3' size={25} style={{color: '#fff', marginRight: '2rem'}}/>
                        11-3112-4079
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={25} style={{color: '#fff', marginRight: '2rem'}}/>
                        alee_ruizdiaz@hotmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <div className='social'>
                <FaLinkedin className='my-lg-3' size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                <FaGithub size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer