import React from 'react'
import project1 from '../images/prj1.png'

export const Projects = (props) => {
    return (
        <section id="projects" className="projects sec-pad ">
            <div className="main-container ">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">
                        Here you will find some of the personal and clients projects that I
                        created, Each project containing its own Overview
                    </span>
                </h2>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={project1}  className="projects__row-img" loading="lazy" />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Notebook-App</h3>
                            <p className="projects__row-content-desc">
                                A Notebook Application where you can manage all your notes on cloud.
                            </p>
                            <a className='btn btn-primary' href='' target='_blank'>More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
