import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

export const Services = (props) => {

    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    }, [useinview]);

    return (
        <div ref={ref} className="main-container-page" id='services'>
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
                className="services-container">
                <h4 style={{ color: props.mode === 'light' ? '' : 'white' }}>Services</h4>
                <p style={{ color: props.mode === 'light' ? '' : 'white' }}>Here are my Services that i will provide you!</p>
                <div className="row" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                </div>
                <div className="service">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={maincontrols}
                        transition={{
                            duration: 0.7, delay: 0.25
                        }} className="boxex" style={{ backgroundColor: props.mode === 'light' ? '' : '#131241', boxShadow: props.mode === 'light' ? ' ' : '3px 3px 15px #31bbb4' }} >
                        <div className="image-box">
                            <i class="fa-brands fa-creative-commons-nd" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                        </div>
                        <h1 style={{ color: props.mode === 'light' ? '' : '#c9c9e2' }}>Web Design</h1>
                        <p style={{ color: props.mode === 'light' ? '' : '#c9c9e2' }}>I will provide you the best and creative Web Designs.
                            Your Satisfaction is my Success. So, i am waiting for my clients
                            Thank you</p>
                    </motion.div>
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
                        className="boxex" style={{ backgroundColor: props.mode === 'light' ? '' : '#131241', boxShadow: props.mode === 'light' ? ' ' : '2px 2px 10px #31bbb4' }}>
                        <div className="image-box">
                            <i class="fa-solid fa-user-pen" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                        </div>
                        <h1 style={{ color: props.mode === 'light' ? '' : '#c9c9e2' }}>Web Development</h1>
                        <p style={{ color: props.mode === 'light' ? '' : '#c9c9e2' }}>I will provide you the best and creative Website development with enhance
                            Frontend and Backend. Your Requirements are my first priority.
                        </p>
                    </motion.div>
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
                        className="boxex" style={{ backgroundColor: props.mode === 'light' ? '' : '#131241', boxShadow: props.mode === 'light' ? ' ' : '2px 2px 10px #31bbb4' }}>
                        <div className="image-box">
                            <i class="fa-solid fa-laptop-file" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                        </div>
                        <h1 style={{ color: props.mode === 'light' ? '' : '#c9c9e2' }}>Responsive Designs</h1>
                        <p style={{ color: props.mode === 'light' ? '' : '#c9c9e2' }}>I will provide you the Fully Responsive Designs which you can be access in any
                            Device according to your Requirements. Just Hire me One time!
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
