import React from 'react'

import img_process from '../../assets/images/process.png'
import img_strategic from '../../assets/images/strategic.png'
import img_experience from '../../assets/images/experience.png'
import img_artificial from '../../assets/images/artificial.png'

import img_whychooseus from '../../assets/images/whychooseus.png'
import img_whychooseuswoman from '../../assets/images/whychooseuswoman.png'






const WhyChooseUs = () => {
  return (
    <div>
        <section className="Why-Choose-Us">
                <div className="container">
                    <div className="text-class">
                        <div className="section-title">
                            <p>Why Choose Us</p>
                            <h2>Why We Are The Best Business Consulting Agency</h2>
                        </div>
                        <div className="PSEA">
                            <div className="Process-Excellence">
                                <img className="ikon" src={img_process} alt=""/>
                                <h3>Process Excellence</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="Strategic-Planning">
                                <img className="ikon" src={img_strategic} alt=""/>
                                <h3>Strategic Planning</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="Experience-Design">
                                <img className="ikon" src={img_experience} alt=""/>
                                <h3>Experience Design</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="Artificial-Inteligence">
                                <img className="ikon" src={img_artificial} alt=""/>
                                <h3>Artificial Inteligence</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="img-class">
                        <img className="whychooseus" src={img_whychooseus} alt=""/>
                        <img className="whychooseuswoman" src={img_whychooseuswoman} alt=""/>
                    </div>
                </div>
                
            </section>
    </div>
  )
}

export default WhyChooseUs