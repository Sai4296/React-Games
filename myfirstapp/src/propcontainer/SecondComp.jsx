

import React from 'react'

const SecondComp = () => {
  return (
    <div className='contacts'>
        <article className='contact-card'>
            <img 
                src={require("../images/Img2.jpg")}
                alt="img not rendered" 
                />
            <div className="info-group">
                <img 
                    src = {require("../images/Phone.png")}
                    alt="Phone not rendered"
                    />

                <p>(330)-(289)-6227</p>
            </div>
            <div className="info-group">
                <img 
                    src = {require("../images/Email.png")}
                    alt="Email not rendered"
                    />
                
                <h3>Mr. Chandra Nakkala</h3>
            </div>
        </article>
    </div>
  )
}

export default SecondComp