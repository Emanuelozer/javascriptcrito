import React from 'react'

import img_wavylinesfooter from '../../assets/images/background-lines-white-right.svg'
import img_logotypewhite from '../../assets/images/logotype-white.svg'

const Footer = () => {
  return (
    <div>
        <div className="footer">
                <img className="wavy-lines-footer" src={img_wavylinesfooter} alt=""/>
                <div className="container">
                    <div className="loggotype-footer">
                        <img src={img_logotypewhite} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="CHRL">
                        <div className="company">
                            <a className="H3" href="">Company</a>
                            <a className="link" href="">About</a>
                            <a className="link" href="">Features</a>
                            <a className="link" href="">Works</a>
                            <a className="link" href="">Career</a>
                        </div>
                        <div className="help">
                            <a className="H3" href="">Help</a>
                            <a className="link" href="">Customer Support</a>
                            <a className="link" href="">Delivery Details</a>
                            <a className="link" href="">Terms & Conditions</a>
                            <a className="link" href="">Privacy Policy</a>
                        </div>
                        <div className="resources">
                            <a className="H3" href="">Resources</a>
                            <a className="link" href="">Free eBooks</a>
                            <a className="link" href="">Development Tutorial</a>
                            <a className="link" href="">How to - Blog</a>
                            <a className="link" href="">Youtube Playlist</a>
                        </div>
                        <div className="Link">
                            <a className="H3" href="">Link</a>
                            <a className="link" href="">Free eBooks</a>
                            <a className="link" href="">Development Tutorial</a>
                            <a className="link" href="">How to - Blog</a>
                            <a className="link" href="">Youtube Playlist</a>
                        </div>
                    </div>
                </div>
                <div className="smal-border"></div>
                <div className="footer-menu">
                    <div className="copy">© 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
                    <div className="socialmedia-bar">
                        <a href="https//facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https//twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https//instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https//linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer