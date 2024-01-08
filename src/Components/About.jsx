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
                            <button type="button" className="aboutbtn" onClick={onlinkdin} style={{ backgroundColor: props.mode === 'light' ? '' : 'white', color: props.mode === 'light' ? '' : 'black', fontWeight: props.mode === 'light' ? '' : '600' }}>Know Me</button>
                        </span>
                    </div>
                    <div className="left-about">
                        <div className="skills">
                            <h4 className='skills-head' style={{ color: props.mode === 'light' ? 'navy' : 'white' }} >My Capabilites</h4>
                            <div className="skills-icons">
                                <div className="gap-1">
                                    <h4>React.js</h4>
                                    <h4>Next.js</h4>
                                    <h4>Node.js</h4>
                                    <h4>MongoDB</h4>

                                </div>
                                <div className='gap'>
                                    <h4>SQL</h4>
                                    <h4>Git</h4>
                                    <h4>Github</h4>

                                </div>
                                <div className='gap'>
                                    <h4>Responsiveness</h4>
                                    <h4>HTML</h4>
                                    <h4>CSS</h4>

                                </div>
                                <div className='gap'>
                                    <h4>Javascript</h4>
                                    <h4>Tailwind</h4>
                                    <h4>CSharp</h4>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}
