import React from 'react'

import img_handshake from '../../assets/images/Handshake.png'
import img_lamp from '../../assets/images/Lamp.png'
import img_graf from '../../assets/images/Graf.png'
import img_box from '../../assets/images/box.png'



const Features = () => {
  return (
    <Features>
         <section className="Features">
                <div className="container">     
                    <div className="flexx">
                        <div className="section-title">
                            <p>Features</p>
                            <h2>Our Accounting is trusted by thousand of companies</h2>
                        </div>
                        <a className="btn-yellow" href="Learnmore.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                    <div className="four-features">
                        <div className="features">
                            <img src={img_handshake} alt=""/>
                            <h3>Business Advice</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="features">
                            <img src={img_lamp} alt=""/>
                            <h3>Startup Business</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="features">
                            <img src={img_graf} alt=""/>
                            <h3>Financial Advice</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="features">
                            <img src={img_box} alt=""/>
                            <h3>Risk Management</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="buttondown"><a className="btn-yellow2" href="Learnmore.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a></div>
                    </div>
                </div>
               
            </section>
    </Features>
  )
}

export default Features