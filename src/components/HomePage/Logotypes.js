import React from 'react'

import img_paperz from '../../assets/images/paperz.svg'
import img_dorfus from '../../assets/images/dorfus.svg'
import img_martino from '../../assets/images/martino.svg'
import img_square from '../../assets/images/square.svg'
import img_gobona from '../../assets/images/gobona.svg'


const 
Loggotypes = () => {
  return (
    <div>
        <section className="Loggotypes">
                  <div className="container">
                    <div className="loggos">
                      <img src={img_paperz} alt="loggos" />
                      <img src={img_dorfus} alt="loggos" />
                      <img src={img_martino} alt="loggos" />
                      <img src={img_square} alt="loggos" />
                      <img src={img_gobona} alt="loggos" />
                    </div>
                  </div>
            </section>

    </div>
  )
}

export default Loggotypes