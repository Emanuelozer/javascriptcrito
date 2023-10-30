import React from 'react'

import img_kristine from '../../assets/images/Kristine.png'
import img_mark from '../../assets/images/mark.png'
import img_kimberly from '../../assets/images/kimberly.png'
import img_justin from '../../assets/images/justin.png'


const MeetOurTeam = () => {
  return (
    <div>
        <section className="Meet-Our-Team">   
                <div className="container">
                    <div className="top-row">
                        <div className="section-title">
                            <p>Meet Our Team</p>
                            <h2>Experience Team Members</h2>
                        </div>
                        <div className="knapp-1"><a className="btn-transparent" href="Browse Teams.html">Browse Teams<i className="fa-regular fa-arrow-up-right"></i></a></div>
                    </div>
                    <div className="members">
                        <div className="member">
                            <img src={img_kristine} alt=""/>
                            <h3>Kristine Palmer</h3>
                            <p>Chef Operation Officer</p>
                        </div>
                        <div className="member">
                            <img src={img_mark} alt=""/>
                            <h3>Mark Aubri</h3>
                            <p>Senior Consultant</p>
                        </div>
                        <div className="member">
                            <img src={img_kimberly} alt=""/>
                            <h3>Kimberly Hansen</h3>
                            <p>Senior Consultant</p>
                        </div>
                        <div className="member">
                            <img src={img_justin} alt=""/>
                            <h3>Justin Willoman</h3>
                            <p>Senior Tech Consultant</p>
                        </div>
                    </div>
                    <img className="dotts" src="images/dot.png" alt=""/>
                    <div className="knapp-2"><a className="btn-transparent" href="Browse Teams.html">Browse Teams<i className="fa-regular fa-arrow-up-right"></i></a></div>
                </div>
        </section>
    </div>
  )
}

export default MeetOurTeam