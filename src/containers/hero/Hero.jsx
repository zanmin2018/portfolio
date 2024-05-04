import React from 'react'
import './hero.css'



//Assets
import hero_image from '../../assets/pic_stan.jpg'

function Hero() {
    return (
        <>
            <div className='hero section-padding' id='home'>
                <div className='hero-content'>
                    <h1 className='gradient-text' style={{ paddingBottom: '10px' }}>Stanley Idiagbonya</h1>
                    <h2 style={{ marginTop: '5px', fontSize: '1.5em' }}>Senior User Researcher</h2>
                    <p>Proficient in understanding users needs and
                        communicating research insights to multidisciplinary teams.</p>
                    <a href='#works' className='explore-btn'>View my portfolio</a>

                </div>
                <div className='hero-image'>
                    {/* <img src={hero_img} alt='Hero' /> */}
                    <img src={hero_image} alt='Hero' />

                </div>

            </div>
            {/* <div className='hero-scroll-animation'>
                <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
            </div> */}
        </>
    )
}

export default Hero
