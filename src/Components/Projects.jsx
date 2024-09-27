/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import TalenScout from '../images/talentscout.png'
import bloodline from '../images/bloodline.png'
import dashboard from '../images/dashboard.png'
import NextGenCareer from '../images/nextgen-career.png'


export const Projects = (props) => {

    const onPrj1 = () => {
        window.location.href = "https://www.syedtalhahussain.com/";
    }

    const onPrj2 = () => {
        window.location.href = "https://beyoung-wine.vercel.app/";
    }
    const onPrj3 = () => {
        window.location.href = "https://bloodline-iota.vercel.app/";
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

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={dashboard} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>E-COMMERCE DASHBOARD</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A modern E-commerce Dashboard.
                            </p>
                            <div>
                                <button onClick={onPrj1} type="button" className="prjbtn mt-3 rounded-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={NextGenCareer} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>NEXTGEN-CAREER</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A platform where for future creations
                            </p>
                            <div>
                                <button onClick={onPrj2} type="button" className="prjbtn mt-3 rounded-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={TalenScout} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>TALENT SCOUT</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A modern JobFinder area where people gets their dream job.
                            </p>
                            <div>
                                <button onClick={onPrj2} type="button" className="prjbtn mt-3 rounded-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={bloodline} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>CREATIVE AGENCY</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                Creative Agency is a modern bloodline agency
                            </p>
                            <div>
                                <button onClick={onPrj3} type="button" className="prjbtn mt-3 rounded-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="projects__content">
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
                </div> */}
            </motion.div>
        </section>
    )
}
