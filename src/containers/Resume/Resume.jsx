import React from 'react'
import { Education, WorkExperience } from '../../components'
import './resume.css'

function Resume() {
    return (
        <div className='resume section-margin' id='about'>
            {/* <h1 className='gradient-text'>My Resume</h1> */}
            <WorkExperience />
            <Education />

        </div>
    )
}

export default Resume
