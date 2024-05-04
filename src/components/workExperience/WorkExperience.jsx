import React from 'react'
import './workexperience.css'

//Material Icons
import WorkIcon from '@mui/icons-material/Work';
import { TimelineBlock } from '..';

function WorkExperience() {
    return (
        <div className='workexperience'>
            <div className='workexperience-heading' style={{ flexDirection: 'column', marginBottom: '8rem' }}>
                <h2>My Profile</h2>
                <p style={{ color: 'whitesmoke', marginTop: '1em', lineHeight: 2 }}>Highly analytical client service professional with extensive knowledge and experience in user research, managing
                    stakeholders, team collaboration, strategic planning, and user testing. Proficient in understanding users needs and
                    communicating research insights and findings to the multidisciplinary team, as well as presenting it to stakeholders.
                    Experienced at selecting the correct research methodologies and recruiting the right participants. Actively involved
                    in online UCD communities and educating other team members about the impact of UX on the performance of
                    products and services. Good communication and analytical skills, including the ability to communicate technical
                    concepts to non-technical stakeholders. A resilient individual who understands the importance of privacy and the
                    ability to adapt to different situations.</p>
            </div>
            <div className='workexperience-heading'>
                <h2>Work Experience</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Senior User Researcher' duration='Aug 2022 - Present' company='FUTURETREND TECHNOLOGIES LTD - London, United Kingdom' text="Working on a project for Ontogeny Capital to enhance the user experience of one of their financial products after
some UX Research uncovered opportunities to improve the user journey on the app." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='User Researcher' duration='May 2020 - Jul 2022' company='BENFOL GROUP - Chicago, USA (Remote)' text="Benfol Group offers a user-friendly platform where users can explore and purchase online certification courses. I worked on a study to understand how users were engaging with the app. The findings
revealed that 85% of users were willing to commit to longer subscriptions, but many were hesitant because they
couldn't preview details about the courses before making a purchase." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='User Researcher' duration='Feb 2019 - Apr 2020' company='LDA CARE - Bristol, United Kingdom' text="LDA Care crafted a research roadmap to guide the development of its services, outlining both short-term
enhancements and long-term strategic directions. This approach was aimed at continually enhancing the quality
of service it provides to users while ensuring proper budget allocation for essential projects." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='IT Support Engineer' duration='Jun 2017 - Jan 2019' company='NISCAL ENERGY LIMITED - Abuja, Nigeria' text="Closely monitored networking systems to effectively manage network infrastructure performance levels.
Escalated incidents to external manufacturers and suppliers, seeking responsive resolution for minimized
service disruption." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Customer Service Manager' duration='Feb 2015 - May 2017' company='ARK CREDIT LIMITED - Abuja, Nigeria' text='Improved customer service experience, engaged customers, and facilitated organic growth.
Took ownership of customers’ issues and followed problems through to resolution.' />
            </div>
        </div>
    )
}

export default WorkExperience
