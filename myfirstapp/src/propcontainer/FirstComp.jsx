

import React from 'react'

const FirstComp = () => {
  return (
    <div className='contacts'>
        <article className='contact-card'>
            <img 
                src={require("../images/Img1.jpg")}
                alt="img not rendered" 
                />
            <div className="info-group">
                <img 
                    src = {require("../images/Phone.png")}
                    alt="Phone not rendered"
                    />

                <p>(330)-(289)-6225</p>
            </div>
            <div className="info-group">
                <img 
                    src = {require("../images/Email.png")}
                    alt="Email not rendered"
                    />
                
                <h3>Mr. Sai Prasada Reddy</h3>
            </div>
        </article>
    </div>
  )
}

export default FirstComp