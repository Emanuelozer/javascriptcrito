import React from 'react'

import img_backgroundwavylines from '../../assets/images/background-wavy-lines.svg'

const Newsletter = () => {
  return (
    <div>
         <section className="newsletter">
                    <img className="background-wavy-lines" src={img_backgroundwavylines} alt=""/>
                    <div className="container">
                        <h2>Get News Uppdates By Signup</h2>
                        <form>
                            <input type="text" placeholder="username@domain.com"/>
                            <button className="btn-yellow">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
                        </form>
                    </div>
            </section>
    </div>
  )
}

export default Newsletter