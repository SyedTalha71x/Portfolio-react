import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import project1edit from '../images/prj1edit.png'
import project2edit from '../images/prj2edit.png'
import { ProjectModal1 } from './ProjectModal1'
import { ProjectModal2 } from './ProjectModal2'





export const Projects = (props) => {

    const [showModal1, setShowModal1] = useState(false);

    const handleOnClose = () => {
        setShowModal1(false);
    }

    const [showModal2, setShowModal2] = useState(false);

    const handleOnClose1 = () => {
        setShowModal2(false);
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
                        Here you will find some of the personal and clients projects that I
                        created, Each project containing its own Overview
                    </span>

                </h2>
                <div className="row my-4" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                </div>

                <div className="projects__content">
                    <div className="projects__row" >
                        <div className="projects__row-img-cont" >
                            <img src={project1edit} className="projects__row-img" loading="lazy" />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>Notebook-App</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Notebook Application where you can manage all your notes on cloud.
                            </p>
                            <div>
                                <button onClick={() => setShowModal1(true)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    More Info
                                </button>
                                <ProjectModal1 onClose={handleOnClose} visible={showModal1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={project2edit} className="projects__row-img" loading="lazy" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 10px navy' }} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>Portfolio-Web</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Portfolio Website for Business Usage and others.
                            </p>
                            <div>
                                <button onClick={() => setShowModal2(true)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    More Info
                                </button>
                                <ProjectModal2 onClose={handleOnClose1} visible={showModal2} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
