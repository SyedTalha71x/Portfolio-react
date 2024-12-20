/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import TalenScout from '../images/talentscout.png'
import bloodline from '../images/bloodline.png'
import NextGenCareer from '../images/nextcareer.png'
import Ecommerce from '../images/ecommerce.png'
import skillhub from '../images/skillhub.png'

export const Projects = (props) => {

    const onPrj2 = () => {
        window.location.href = "https://nextgen-career.vercel.app/login";
    }
    const onPrj4 = () => {
        window.location.href = "https://creative-bloodline.vercel.app/";
    }
    const onPrj5 = () => {
        window.location.href = "https://beyond-seven.vercel.app/";
    }

    const onPrj1 = () =>{
        window.location.href = "https://skillhub-woad.vercel.app/";
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
                            <img src={NextGenCareer} className="projects__row-img  rounded-xl" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
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
                            <img src={TalenScout} className="projects__row-img  rounded-xl" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>TALENT SCOUT</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A modern JobFinder area where people gets their dream job.
                            </p>
                            <div>
                                <button  type="button" className="prjbtn mt-3 rounded-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                   Not Deployed
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={bloodline} className="projects__row-img  rounded-xl" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>CREATIVE AGENCY</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                Creative Agency is a modern bloodline agency
                            </p>
                            <div>
                                <button onClick={onPrj4} type="button" className="prjbtn mt-3 rounded-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={Ecommerce} className="projects__row-img  rounded-xl" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>BEYOND</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                              Beyond is a modern ecommerce store
                            </p>
                            <div>
                                <button onClick={onPrj5} type="button" className="prjbtn mt-3 rounded-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={skillhub} className="projects__row-img  rounded-xl" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>SKILLHUB</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A skill learning platform.
                            </p>
                            <div>
                                <button onClick={onPrj1} type="button" className="prjbtn mt-3 rounded-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
