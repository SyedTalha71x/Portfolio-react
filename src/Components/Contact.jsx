import React from 'react'

export const Contact = (props) => {
  return (
    <div className="main-contact-container" style={{boxShadow: props.mode === 'light'?'':'3px 3px 30px wheat'}}>
      <div className="contact-row">
        <div className="left-contact">
          <form action="" id='contact'>
            <div className="contact-form">
              <h4>Send us a message</h4>
              <div className="form-x">
                <div className="form-group">
                  <input type="text" name='name' placeholder='Name' />
                </div>
                <div className="form-group">
                  <input type="text" name='email' placeholder='Email' />
                </div>
                <div className="form-group">
                  <input type="text" name='subject' placeholder='Subject' />
                </div>
                <div className="form-group">
                  <input type="textarea" name='message' placeholder='Message' />
                </div>
                <div className="form-group-btn">
                  <button className="btn btn-primary">Connect</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="right-contact">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>We are open for any suggestion just contact us.</p>
            <div className="names">
              <span>Email:</span> <p className='info-m'>pc16777.syedtalhahussain@gmail.com</p>
              <span>Phone:</span> <p className='info-m'>+97 3193511792</p>
              <span>Website:</span> <p className='info-m'><a className='link-ref' href="https://syedtalhahussain.vercel.app/">syedtalhahussain.vercel.app</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
