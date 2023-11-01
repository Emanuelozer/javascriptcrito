import React from 'react'

import img_womanblueshirt from '../../assets/images/Womanblueshirt.svg'
import img_EWlement from '../../assets/images/EWlement.png'
import img_Quotes from '../../assets/images/Quotes.svg'



const AboutCompany = () => {
  return (
    <div>
        <section className="About-Company">
                
                <div className="container">
                    <div className="flexxx">
                        <div className="womanquates">
                            <div className="img">
                                <img className="Womanblueshirt" src={img_womanblueshirt} alt="Kvinna"/>
                                <img className="EWlement" src={img_EWlement} alt="EWlement"/>
                                <img className="Quotes" src={img_Quotes} alt="Quotes"/>
                            </div>
                        </div>
                        <div className="section-title">
                            <p>About Company</p>
                            <h2>We Are Business Consulting & Credit Repair Experts</h2>
                            <div className="lorem-1">
                                <div className='"lorem-1"'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</div>
                            </div>
                            <div className="lorem-2">
                                <div className='"lorem-2"'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</div>
                            </div>
                            <div className="left-content">
                                <a className="btn-black" href="AboutCompany.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                                <a className="btn-cirkle-play" href="learnmorevideo.html"><i className="fa-thin fa-circle-play fa-2xl"></i></a>
                                <div>Intro Video</div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </section>
    </div>
  )
}

export default AboutCompany