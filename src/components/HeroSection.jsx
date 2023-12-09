import React from 'react'
import hero from '../assets/hero.png'
import { HashLink as Link } from 'react-router-hash-link';
import hm from '../assets/HM.png'
import obey from '../assets/Obey.png'
import shopify from '../assets/Shopify.png'
import lacoste from '../assets/Lacoste.png'
import levis from '../assets/Levis.png'
import amazon from '../assets/Amazon.png'

const HeroSection = () => {
  return (
    <>
        <section className='hero'>
            <div className="hero__info">
                <div className="hero__info-title">
                    <h1>let's explore unique clothes.</h1>
                </div>
                <div className="hero__info-subtitle">
                    <p>Live for Influential and Innovative fashion!</p>
                </div>
                <div className="hero__info-btn">
                    <Link smooth to="#catalogue">
                        Shop Now
                    </Link>
                </div>
            </div>
            <div className="hero__image">
                <img src={hero} alt="girl" />
            </div> 
        </section>

        <section className="hero__sponsors">
            <img src={hm} alt="" />
            <img src={obey} alt="" />
            <img src={shopify} alt="" />
            <img src={lacoste} alt="" />
            <img src={levis} alt="" />
            <img src={amazon} alt="" />
        </section>
    </>
  )
}

export default HeroSection