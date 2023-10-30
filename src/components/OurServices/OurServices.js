import React from 'react'

import img_wavylinesourservices from '../../assets/images/Rectangle 607.svg'

const OurServices = () => {
  return (
    <div>
        <section className="Our-Services">
                <img className="wavy-lines-our-services" src={img_wavylinesourservices} alt=""/>
                <div className="container">
                    <div className="section-title">
                        <p>Our Services</p>
                        <h2>We Provide The Best Service For Consulting</h2>
                    </div>
                    <div className="services">
                        <div className="service">
                            <div className="streck"></div>
                            <h3>Business Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a className="btn-black" href="index.html"><i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="service yellow">
                            <div className="streck"></div>
                            <h3>Startup Business</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a className="btn-white" href="index.html"><i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="service">
                            <div className="streck"></div>
                            <h3>Financial Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a className="btn-black" href="index.html"><i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="service">
                            <div className="streck"></div>
                            <h3>Risk Management</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a className="btn-black" href="index.html"><i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <a className="btn-transparent" href="BrowseServices.html">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </section>
    </div>
  )
}

export default OurServices