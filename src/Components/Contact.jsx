import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

export const Contact = (props) => {
  const ref = useRef(null);

  const useinview = useInView(ref, { once: true });

  const maincontrols = useAnimation();

  useEffect(() => {
    if (useinview) {
      maincontrols.start("visible");
    }
  }, [useinview]);

  return (
    <div ref={ref} className="main-contact-container" style={{ boxShadow: props.mode === 'light' ? '' : '3px 3px 30px wheat' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={maincontrols}
        transition={{
          duration: 0.7, delay: 0.25
        }}
        className="contact-row">
        <div className="left-contact">
          <form action="" id='contact'>
            <div
              className="contact-form">
              <h4>Lets work together?</h4>
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
                  <button className="connectbtn">Connect</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div

          className="right-contact">
          <div className="contact-info">   <h4>Contact Information</h4>
            <p>We are open for any suggestion just contact us.</p>
            <div className="names">
              <i class="fa-solid fa-envelope"></i>   <span>Email:</span> <p className='info-m'>pc16777.syedtalhahussain@gmail.com</p>
              <i class="fa-solid fa-phone"></i>   <span>Phone:</span> <p className='info-m'>+97 3193511792</p>
              <i class="fa-brands fa-webflow"></i> <span>Website:</span> <p className='info-m'><a className='link-ref' href="https://syedtalhahussain.com">www.syedtalhahussain.com</a></p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
