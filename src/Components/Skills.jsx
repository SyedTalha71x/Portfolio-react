import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

const Skills = (props) => {
    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    }, [useinview]);

    return (
        <div ref={ref}>
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


                className='skills_section ' style={{ backgroundColor: props.mode === 'light' ? '' : 'black', boxShadow: props.mode === 'light' ? '' : '4px 4px 30px #8d330f' }}>

                <div className="skills_row">
                    <div className="left-skills">
                        <div className="sectionheading">
                            <h1 style={{ color: props.mode === 'light' ? '' : 'white' }}>expert in following things</h1>
                            <div className="rowgap">
                                <div className="frontend">
                                    <div className="frontendhead" style={{ color: props.mode === 'light' ? '' : 'white' }} >
                                        Frontend
                                    </div>
                                    <div className='f'>
                                        <div>Html</div>
                                        <div>Css</div>
                                        <div>Javascript</div>
                                        <div>Tailwind</div>
                                        <div>React.js</div>
                                        <div>Next.js</div>
                                    </div>
                                </div>
                                <div className="backend" >
                                    <div className="backendhead" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                        Backend
                                    </div>
                                    <div className='b'>

                                        <div>Node.js</div>
                                        <div>MongoDB</div>
                                        <div>SQL</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="right-skills">
                        <img className='skills_img' src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default Skills