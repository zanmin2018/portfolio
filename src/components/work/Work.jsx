import React, { useState } from 'react'
import './work.css'

import { Dialog, DialogTitle, DialogContent, DialogContentText, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';

function Work({ image, title, subTitle, overview, objective, methodology, keyFindings, implications }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='work-grid'>
                {/* <div className='work-grid-image'>
                <img src={image} alt='image' />
            </div> */}
                <div className='work-grid-body'>
                    <h2>{title}</h2>
                    <h4>{subTitle}</h4>
                    <p>{overview}</p>

                    <div className='work-grid-body-btn' onClick={() => setOpen(true)}>
                        <a>Details</a>

                    </div>

                </div>

            </div>
            <Dialog onClose={() => setOpen(false)} open={open} fullWidth fullScreen>

                <Box display={'flex'} justifyContent={'space-between'} sx={{ backgroundColor: 'black', color: '#67c6fa' }}>
                    <DialogTitle>{title}</DialogTitle>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={() => setOpen(false)}
                        aria-label="close"
                        sx={{ marginRight: '1em' }}

                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <DialogContent sx={{ backgroundColor: '#040C18', color: 'white' }}>
                    <DialogContentText id="alert-dialog-description" className='dialog-text' color={'whitesmoke'}>
                        <h4>Project Overview</h4>
                        <p>{overview}</p>
                        <h4>Project Objective: </h4>
                        <p>{objective}</p>

                        <h4>User Research Methodology: </h4>
                        <ul>
                            {methodology.map((method) => {
                                return <li key={method}>{method}</li>
                            })}
                        </ul>

                        <h4>Key Findings:</h4>
                        <ul>
                            {keyFindings.map((finding) => {
                                return <li key={finding}>{finding}</li>
                            })}
                        </ul>


                        <h4>Implications for Design:</h4>
                        <ul>
                            {implications.map((imp) => {
                                return <li key={imp}>{imp}</li>
                            })}
                        </ul>

                    </DialogContentText>
                </DialogContent>

            </Dialog >
        </>
    )
}

export default Work
