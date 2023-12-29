import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = (props) => {

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [subject, setsubject] = useState()
  const [message, setmessage] = useState()

  const ref = useRef(null);

  const useinview = useInView(ref, { once: true });

  const maincontrols = useAnimation();

  useEffect(() => {
    if (useinview) {
      maincontrols.start("visible");
    }
  }, [useinview]);

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    }
    else if (e.target.name == "email") {
      setemail(e.target.value);
    }
    else if (e.target.name == "subject") {
      setsubject(e.target.value);
    }
    else if (e.target.name == "message") {
      setmessage(e.target.value);
    }
  }
  const submitHandle = async (e) => {
    e.preventDefault();
    const data = { name, email, subject, message };
    let response = await fetch('http://localhost:4000/api/cont/addcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let json = await response.json();
    console.log(json);
    setname('')
    setemail('')
    setsubject('')
    setmessage('')
    if (response.success) {
      toast.success("Your Information has been Submitted, We will get back to you in some time!", {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div ref={ref} className="main-contact-container" style={{ boxShadow: props.mode === 'light' ? '' : '3px 3px 30px wheat' }}>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
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
          <form action="" id='contact' onSubmit={submitHandle}>
            <div
              className="contact-form">
              <h4>Lets work together?</h4>
              <div className="form-x">
                <div className="form-group">
                  <input value={name} onChange={handleChange} type="name" name='name' id='name' placeholder='Name' />
                </div>
                <div className="form-group">
                  <input value={email} onChange={handleChange} type="email" name='email' id='email' placeholder='Email' />
                </div>
                <div className="form-group">
                  <input value={subject} onChange={handleChange} type="subject" name='subject' id='subject' placeholder='Subject' />
                </div>
                <div className="form-group">
                  <input value={message} onChange={handleChange} type="message" name='message' id='message' placeholder='Message' />
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
