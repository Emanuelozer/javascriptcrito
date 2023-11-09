import React from 'react'

import img_backgroundlines from '../../assets/images/background-lines.svg'
import img_imageofaman from '../../assets/images/Showcase-image.svg'
import Button from '../Generics/Button'


const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <img className="background-lines" src={img_backgroundlines} alt=""/>
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value propistion and turn them into testable prototypes.</p>
                <Button text="Get Consultning" url="c/services/get-consultning" />
                <a className="btn-transparent" href="services.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <img src={img_imageofaman} alt="image of a man"/>
        </div>
    </section>
  )
}

export default ShowcaseSection