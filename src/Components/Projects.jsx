import React from 'react'
import project1 from '../images/prj1.png'
import project2 from '../images/prj2.png'

export const Projects = (props) => {
    return (
        <section id="projects" className="projects sec-pad ">
            <div className="main-container ">
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
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={project1} className="projects__row-img" loading="lazy" style={{boxShadow: props.mode === 'light'?'':'2px 2px 10px navy'}} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>Notebook-App</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Notebook Application where you can manage all your notes on cloud.
                            </p>
                            <a className='btn btn-primary' href='' target='_blank'>More Info</a>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img src={project2} className="projects__row-img" loading="lazy" style={{boxShadow: props.mode === 'light'?'':'2px 2px 10px navy'}} />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title" style={{ color: props.mode === 'light' ? '' : 'white' }}>Portfolio-Web</h3>
                            <p className="projects__row-content-desc" style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                A Portfolio Website for Business Usage and others.
                            </p>
                            <a className='btn btn-primary' href='' target='_blank'>More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
