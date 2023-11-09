import React from 'react'


import img_backgroundlines from '../../assets/images/background-lines.svg'
import Form from './Form'
import { NavLink } from 'react-router-dom'

const contactpage = () => {
    
  return (
    <div>
            <section className="showcase-contact">
                <img className="background-lines"src={img_backgroundlines} alt=""/>
                <div className="container">
                    <NavLink className to="/">Home</NavLink>
                    <NavLink className to="">Contacts</NavLink>
                    <h1>Let's Connect</h1>
                </div>
            </section>

            <div className="contact-section">
                <div className="container contact-container">
                    <a className="contact-box" href="https://maps.app.goo.gl/36Zhk3SdR5JGMMus9" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-circle-location-arrow"></i>
                        <div className="contact-info">
                            <h3>Visit us</h3>
                            <p>Sveavägen 31</p>
                            <p>111 34 STOCKHOLM</p>
                        </div>
                    </a>    
                    <a className="contact-box" href="tel:+46812147050">
                        <i className="fa-solid fa-circle-phone"></i>
                        <div className="contact-info">
                            <h3>Call us</h3>
                            <p>+46 (8) 121 470 50</p>
                            <p>+46 (8) 121 470 51</p>
                        </div>
                    </a>
                    <a className="contact-box" href="mailto:info@crito.com">
                        <i className="fa-solid fa-circle-envelope"></i>
                        <div className="contact-info">
                            <h3>Email us</h3>
                            <p>info@crito.com</p>
                            <p>support@crito.com</p>
                        </div>
                    </a>
                </div>

                
                {/* Formulär */}
                <Form/>
                
            </div>

            <div className="google-maps">
            <iframe title="Karta över Sveavägen 31, Stockholm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8139.906538213352!2d18.08575454433578!3d59.33334392234748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1695982209656!5m2!1ssv!2sse" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
  )
}

export default contactpage