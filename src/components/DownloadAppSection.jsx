import React from 'react'
import googleplay from '../assets/google-play.png'
import appstore from '../assets/app-store.png'
import app from '../assets/Mobile app.png'


const DownloadAppSection = () => {
  return (
    <section className='download'>
        <div className="download__info">
            <div className="download__info-title">
                <h3>download app & get the voucher</h3>
            </div>
            <div className="download__info-subtitle">
                <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
            </div>
            <div className="download__info-links">
                <a href="https://play.google.com/store/games" target='_blank' rel="noreferrer">
                    <img src={appstore} alt="" />
                </a>
                <a href="https://en.wikipedia.org/wiki/App_store" target='_blank' rel="noreferrer">
                    <img src={googleplay} alt="" />
                </a>
            </div>
        </div>

        <div className="download__app">
            <img src={app} alt="" />
        </div>
    </section>
  )
}

export default DownloadAppSection