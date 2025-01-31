import React from 'react'

const FourthComp = () => {
  return (
    <div className='contacts'>
        <article className='contact-card'>
            <img 
                src={require("../images/Img4.jpg")}
                alt="img not rendered" 
                />
            <div className="info-group">
                <img 
                    src = {require("../images/Phone.png")}
                    alt="Phone not rendered"
                    />

                <p>(330)-(289)-6226</p>
            </div>
            <div className="info-group">
                <img 
                    src = {require("../images/Email.png")}
                    alt="Email not rendered"
                    />
                
                <h3>Mr. Sampath Kumar Koluchulam</h3>
            </div>
        </article>
    </div>
  )
}

export default FourthComp