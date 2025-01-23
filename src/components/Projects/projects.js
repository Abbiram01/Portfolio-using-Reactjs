import React from 'react'
import './projects.css'

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectsTitle'>Projects</h2>
                <span className='projectsDesc'></span>
                <div className='skillBars'>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h1 className='projectsdesc'>• Portfolio website using HTML and CSS</h1>
                        <p className='projectsdescr'>Built a responsive portfolio using HTML and CSS. Showcased technical skills, projects and creativity with a focus on mobile optimization and user-friendly design.</p>
                    </div>
                    </div>
                    <div className="skillBar">
                    <div className="skillBarText">
                        <h1 className='projectsdesc'>• Portfolio website using React Js</h1>
                        <p className='projectsdescr'>Built a portfolio website with React js to highlight my projects and expertise. Designed a user-friendly and responsive interface
                        for optimal viewing on all devices.</p>
                    </div>
                    </div>
                    <div className="skillBar">
                    <div className="skillBarText">
                        <h1 className='projectsdesc'>• spotify clone</h1>
                        <p className='projectsdescr'> Created a Spotify clone using React.js, enabling users to explore playlists and listen to music. Designed a clean, responsive
                        layout for better user interaction. Used React hooks to efficiently manage state and ensure smooth functionality.</p>
                    </div>
                    </div>
            </div>
            <div className='projectsImgs'>
                <img src='' alt='' className='projectsImg' />
            </div>
    
        </section>
    )
}

export default Projects