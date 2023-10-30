import React from 'react'
import './NavSection.css'

import img_logotype from '../../assets/images/Logotype.svg'
import Button from '../Generics/Button'

const NavSection = () => {
  return (
    <div className="container">
        <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
        <div className="logotype">
            <a href="index.html">
                <img src={img_logotype} alt="crito logotype"/>
            </a>
        </div>
        <div className="contactinformation-bar">
            <div className="content-box">
                <i className="fa-regular fa-phone-volume"></i>
                +46 (8) 121 470 50
            </div>
            <div className="content-box">
                <i className="fa-regular fa-envelope"></i>
                info@crito.com
            </div>
            <div className="content-box last">
                <i className="fa-regular fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM
            </div>   
        
        </div>

        <div className="socialmedia-bar">
            <a href="https//facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https//twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https//instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https//linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="menu">
            <nav>
                <a className="active" href="index.html">Home</a>
                <a href="services.html">Service</a>
                <a href="news.html">News</a>
                <a href="contacts.html">Contact</a>
            </nav>
            <Button text= "Login" url= "/login"/>
        </div>
    </div>  )
}

export default NavSection