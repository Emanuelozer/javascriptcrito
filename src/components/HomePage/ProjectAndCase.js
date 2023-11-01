import React from 'react'

import img_article1 from '../../assets/images/article1.png'
import img_article2 from '../../assets/images/article2.png'
import img_article3 from '../../assets/images/article3.png'
import img_article4 from '../../assets/images/article4.png'


const ProjectAndCase = () => {
  return (
    <div>
        <section className="project-and-case">
                <div className="container">
                    <div className="section-title">
                        <p>Project & Case Studies</p>
                        <h2>Let’s Look At Our Global Projects</h2>
                    </div>
                    <div className="project-and-cases">
                        <a className="project" href="#">
                            <img src={img_article1} alt="article image"/>
                            <h3>Grow Your Business</h3>
                            <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                        </a>
                        <a className="project" href="#">
                            <img src={img_article2} alt="article image" />
                            <h3>Why Your Clients Needs A Responsive Website</h3>
                            <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                            </a>
                        <a className="project" href="#">
                            <img src={img_article3} alt="article image" />
                            <h3>Educate your employees to get better results</h3>
                            <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                            </a>
                            <a className="project" href="#">
                            <img src={img_article4} alt="article image" />
                            <h3>Business Insights is a important piece of your business</h3>
                            <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                            </a>
                        </div>
                        <div className="center-content">
                        <a className="btn-black" href="Projects.html">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default ProjectAndCase