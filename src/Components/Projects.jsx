import React from 'react'

export const Projects = (props) => {
    return (
        <div className="main-project-container" id="projects" >
            <div className="project-main-page" >
                <div className="prj-heading">
                    <h2 style={{ color: props.mode === 'light' ? '' : 'white' }}>Projects</h2>
                    <p style={{ color: props.mode === 'light' ? '' : 'white' }}>Here, are some of my Projects you can see.</p>
                </div>
            </div>

            <div className="project-row"  >
                <div className="project-content"  style={{ boxShadow: props.mode === 'light'? '':'3px 3px 30px navy' }}  >
                    <div className="projects" >
                        <h2>Notebook-App</h2>
                        <p>I created a Notebook Application from where you can access and
                            manage all your Notes on Cloud.
                        </p>
                        <div className="tools">
                           <button className="btn btn-primary">
                            Read More
                           </button>
                        </div>
                    </div>
                </div>

                <div className="project-content" style={{ boxShadow: props.mode === 'light'? '':'3px 3px 30px navy' }}>
                    <div className="projects">
                        <h2>Weather - App</h2>
                        <p>I created a Weather App for managing overall Countries Weathers.
                        </p>
                        <div className="tools">
                           <button className="btn btn-primary">
                            Read More
                           </button>
                        </div>
                    </div>
                </div>

                <div className="project-content" style={{ boxShadow: props.mode === 'light'? '':'3px 3px 30px navy' }}>
                    <div className="projects">
                        <h2>Portfolio</h2>
                        <p>I created a personal portfolio Website where a user can manage all
                            of his details and present it to any other Organization
                        </p>
                        <div className="tools">
                           <button className="btn btn-primary">
                            Read More
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
