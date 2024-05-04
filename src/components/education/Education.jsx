import React from 'react'
import './education.css'
import '../workExperience/workexperience.css'

//Material Icons
import SchoolIcon from '@mui/icons-material/School';

import { TimelineBlock } from '..';


function Education() {
    return (
        <div className='education workexperience'>
            <div className='education-heading workexperience-heading'>
                <h2>Education</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Master of Science in Software Engineering and Application' duration='2022' company='University of Bedfordshire, Bedfordshire, United Kingdom' text=" Grade: Distinction" />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Postgraduate Diploma in Information Technology Management' duration='2020' company='Metropolitan School of Business and Management, London, United Kingdom' text="" />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Bachelor of Engineering in Electrical and Electronic Engineering' duration='2010' company='University of Benin, Benin City, Nigeria' text="" />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Diploma in Computer Engineering' duration='2004' company='University of Benin, Benin City, Nigeria' text="" />

            </div>
        </div>
    )
}

export default Education
