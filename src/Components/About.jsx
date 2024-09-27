/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"


export const About = (props) => {
    const onlinkdin = () => {
        window.location.href = "https://www.linkedin.com/in/syed-talha-hussain-93b490253/";
    }

    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useinview]);

    return (
        <div ref={ref} className="container" id='abouts' style={{ backgroundColor: props.mode === 'light' ? '#e9e9e9' : 'black', boxShadow: props.mode === 'light' ? '' : '4px 4px 30px #8d330f' }}>
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
                className="main-about-page">
                <div className="about-content">
                    <div className="left-about">
                        <img className='imageabout' src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="right-about">
                        <h4 style={{ color: props.mode === 'light' ? 'navy' : 'white' }}>About Me</h4>
                        <p style={{ color: props.mode === 'light' ? '' : 'white' }}>I'm a passionate Software Engineer building quality softwares. Check out some of my projects from projects section I'm working with full of my potential in Fields like Desktop Development and Web Development. I have a great knowledge of debugging the applications. I'm open to Job opportunities where I can contribute, learn and grow. Satisfaction from my clients is my first priority.
                            <div>
                                <p>I am a motivated individual and very much excited to work as in a development team with quality Software Engineers, where i can enhance my skills and learn new things about Software Industry</p>
                            </div>
                            <div>
                                <p>In the last couple of years I have been working with my full potential in the above fields and most recently on Web Development.</p>
                            </div>
                        </p>
                        <span className='linkden-id'>
                            <button type="button" className="bg-purple-600 text-white py-2 px-10 rounded-md transition-transform hover:-translate-y-3 duration-700 mt-3" onClick={onlinkdin} style={{ backgroundColor: props.mode === 'light' ? '' : 'white', color: props.mode === 'light' ? '' : 'black', fontWeight: props.mode === 'light' ? '' : '600' }}>Know Me</button>
                        </span>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}
