import React from 'react';

import HeroImg from '../src/images/Group77.png';

export default function Hero(){
    return(
        <section className="hero">
            <img className='hero--photo' src={HeroImg}></img>
            <h1 className='hero--head'>Hotel Booking <span className="online">Online Experiences..</span></h1>
            <p className='hero--para'>Join Unique interactive
                 actvity lead by one of The <br></br>
                 kind host-all <span class='red'>without leaving home</span></p>
        </section>
        )
}