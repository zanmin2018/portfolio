import React from 'react'
import { Work } from '../../components'
import './works.css'


import workUtils from './workutils.js'

console.log(workUtils)
function Works() {
    return (
        <div className='works section-margin' id='works'>
            <h1 className='gradient-text'>Portfolio</h1>
            <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                {workUtils?.map((work) => {
                    return <Work image={''} title={work.title} subTitle="User Research" overview={work.overview} objective={work.objective} keyFindings={work.keyFindings} implications={work.implications} methodology={work.methodology} />
                })}


                {/*  <Work image={DiscordBot} title="Bobby" subTitle="Discord Bot" text="Bobby is a discord bot that helps to find vaccination slots in your area and notify if a vaccine slot is available in your area. The bot is developed using nodeJs and hosted in AWS ec2 instance." codeLink="https://github.com/nahyansharvin/bobby-cowinbot" />

                <Work image={TimeTableApp} title="Time Table App" subTitle="UI Design & Development" text="This is a basic web app developed in React.js which displays the time table of each and every department in EMEA College of Arts and Science, Kondotty." codeLink="https://github.com/tinkerhubemea/time-table-app" liveLink="https://emeatimetable.netlify.app/" />

                <Work image={ProfileApp} title="Profile App" subTitle="UI/UX Design" text="This is a simple profile app design created for the React,js Bootcamp Held at EMEA College organised by TinkerHub EMEA. This was designed to give the participants a task for development." codeLink="https://www.figma.com/file/6P3B4TS8IUjKtrHgrAjv80/Profile-App?node-id=0%3A1" />

                <Work image={ExpenseTracker} title="Expense Tracker" subTitle="UI/UX Design" text="This is a simple Expense Tracker design created for the React.js Bootcamp Held at EMEA College organized by TinkerHub EMEA. This was designed to give the participants a task for development." codeLink="https://www.figma.com/file/OpZVasP6AHifcys8CWcMPA/Expense-Tracker?node-id=2%3A2" />

                <Work image={Poster} title="Poster Design" subTitle="Graphic Design" text="Social Media banners created using various design tools such as Adobe Photoshop and Adobe Illustrator." codeLink="https://drive.google.com/drive/folders/17VEuYbOOSk0FqEyaVGmr7tFHKleC5xaN?usp=sharing" /> */}

            </div>
        </div>
    )
}

export default Works
