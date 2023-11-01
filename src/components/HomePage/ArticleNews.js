import React from 'react'

import img_25mar from '../../assets/images/25mar.png'
import img_chatgpt from '../../assets/images/chatgpt.png'
import img_books from '../../assets/images/books.png'
import img_dot from '../../assets/images/dot.png'


const ArticleNews = () => {
  return (
    <div>
        <section className="Article-News">   
            <div className="container">
                <div className="top-row">
                    <div className="section-title">
                        <p>Article & News</p>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <div className="knapp-1"><a className="btn-transparent" href="Browse Teams.html">Browse Teams<i className="fa-regular fa-arrow-up-right"></i></a></div>
                </div>
                <div className="members">
                    <div className="member">
                        <img src={img_25mar} alt=""/>
                        <p id="business">Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div className="member">
                        <img src={img_chatgpt} alt=""/>
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div className="member">
                        <img src={img_books} alt=""/>
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
                <img className="dotts" src={img_dot} alt=""/>
                <div className="knapp-2"><a className="btn-transparent" href="Browse Articles.html">Browse Teams<i className="fa-regular fa-arrow-up-right"></i></a></div>
            </div>
        </section>
    </div>
  )
}

export default ArticleNews