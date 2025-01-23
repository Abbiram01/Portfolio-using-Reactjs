import React from 'react'
import './intro.css'
// import {Link} from 'react-scroll'; 
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Abhiram</span> <br /> Frontend Developer </span>
                <p className='introPara'>I'm a passionate frontend developer with skills in HTML, CSS, eager to build <br />responsive and user-friendly websites. I’m focused on learning modern frameworks <br />like React.js and improving web performance and accessibility.</p>
                
                <a href='https://www.linkedin.com/in/abhiram-chelikani-858437318'><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Hire Me</button></a>
                
            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>
    )
}

export default Intro