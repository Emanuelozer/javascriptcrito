import React from 'react'

import img_star from '../../assets/images/Star.png'
import img_cassandra from '../../assets/images/cassandra.png'
import img_amanda from '../../assets/images/amanda.png'
import img_jack from '../../assets/images/jack.png'



const Testimonial = () => {
  return (
    <div>
        <section className="Testimonial">
            <div className="container">
                <div className="section-title">
                    <p>Testimonial</p>
                    <h2>What Our Client Says</h2>
                </div>
                <div className="testimonials">
                    <div className="clients">
                        <div className="Client">
                            <img src={img_star} alt=""/>
                            <h3>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</h3>
                            <div className="client-title">
                                <div className="picture">
                                    <img src={img_cassandra} alt=""/>
                                </div>
                                <div className="title">
                                    <h3>Cassandra Warren</h3>
                                    <p>Business Manager, Dorfus</p>
                                </div>
                            </div>
                        </div>
                        <div className="Client">
                            <img src={img_star} alt=""/>
                            <h3>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</h3>
                            <div className="client-title">
                                <div className="picture">
                                    <img src={img_amanda} alt=""/>
                                </div>
                                <div className="title">
                                    <h3>Amanda Tulling</h3>
                                    <p>Senior Developer, Square</p>
                                </div>
                            </div>
                        </div>
                        <div className="Client">
                            <img src={img_star} alt=""/>
                            <h3>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</h3>
                            <div className="client-title">
                                <div className="picture">
                                    <img src={img_jack} alt=""/>
                                </div>
                                <div className="title">
                                    <h3>Jack McDogglas</h3>
                                    <p>Key Account Manager, Gobona</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="center-content">
                        <a className="btn-black" href="Projects.html">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Testimonial