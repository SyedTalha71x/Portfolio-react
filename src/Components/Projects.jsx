import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import project1edit from '../images/prj1edit.png'
import project2edit from '../images/prj2edit.png'
import prj1 from '../images/prj1.png'
import prjedit from '../images/prj2x.png'
import prj3 from '../images/prj3.png'
import prj3edit from '../images/editprj1.png'
import prj4 from '../images/prj4.png'
import prj1editon from '../images/prj1editon.png'
import prj5 from '../images/prj5.png'
import prj from '../images/prj4.png'
import prj2 from '../images/prj2.png'




export const Projects = (props) => {

    // const [showModal1, setShowModal1] = useState(false);

    // const handleOnClose = () => {
    //     setShowModal1(false);
    // }

    // const [showModal2, setShowModal2] = useState(false);

    // const handleOnClose1 = () => {
    //     setShowModal2(false);
    // }

    const onPrj1 = () => {
        window.location.href = "https://www.syedtalhahussain.com/";
    }

    const onPrj2 = () => {
        // window.location.href = "https://www.syedtalhahussain.com/";
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
        <section ref={ref} id="projects" className="projects sec-pad ">
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
                className="main-container ">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main" style={{ color: props.mode === 'light' ? '' : 'white' }}>Projects</span>
                    <span className="heading-sec__sub" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                        Here you will find some of the personal and clients projects that I have
                        created
                    </span>

                </h2>
                <div className="row my-4" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                </div>
                {/* 
                <div className="projects__content">
                    <div className="projects__row" >
                        <div className="projects__row-img-cont" >
                            <img src={prj1} className="projects__row-img" loading="lazy" />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>Notebook-App</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Notebook Application where you can manage all your notes on cloud.
                            </p>
                            <div>
                                <button type="button"  className="prjbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    More Info
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={prj1editon} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>PORTFOLIO</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Modern Portfolio Website
                            </p>
                            <div>
                                <button onClick={onPrj1} type="button" className="prjbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={prj2} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>FITNESS WEBSITE</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Fitness Website with User Authentication System.
                            </p>
                            <div>
                                <button onClick={onPrj2} type="button" className="prjbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={prj5} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>E-COMMERCE WEBSITE</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Modern e-commerce Website.
                            </p>
                            <div>
                                <button onClick={onPrj2} type="button" className="prjbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={prj} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>BLOG STACK</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Full Stack Blog App
                            </p>
                            <div>
                                <button onClick={onPrj2} type="button" className="prjbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
