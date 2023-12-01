import React from 'react'
import { useNavigate } from 'react-router-dom'


export const About = (props) => {
    const onlinkdin = () => {
        window.location.href = "https://www.linkedin.com/in/syed-talha-hussain-93b490253/";
    }

    // const navigate = useNavigate();
    // const onHandle = () => {
    //     navigate("https://www.linkedin.com/in/syed-talha-hussain-93b490253/?originalSubdomain=pk");
    // }
    
    return (
        <div className="container" id='abouts' style={{ backgroundColor: props.mode === 'light' ? '' : 'black' , boxShadow: props.mode === 'light'?'':'3px 3px 30px yellow' }}>
            <div className="main-about-page">
                <div className="about-content">
                    <div className="left-about">
                        <div className="skills">
                            <h4 className='skills-head' style={{ color: props.mode === 'light' ? 'navy' : 'white' }} >My Skills</h4>
                            <div className="skills-icons">
                                <i class="fa-brands fa-js" style={{ color: props.mode === 'light' ? '' : 'white' }} ></i>
                                <i class="fa-brands fa-react" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                                <i class="fa-brands fa-css3-alt" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                                <i class="fa-brands fa-node" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>

                                <div className='gap'>
                                    <i class="fa-solid fa-database" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                                    <i class="fa-brands fa-git" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                                    <i class="fa-brands fa-github" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                                    <i class="fa-solid fa-cloud" style={{ color: props.mode === 'light' ? '' : 'white' }}></i>
                                </div>
                                <div className='skills-para my-2'>
                                    <span className='skills-span' style={{ color: props.mode === 'light' ? '' : 'white' }}>These are my Top Skills
                                        <div className='my-2' style={{ color: props.mode === 'light' ? '' : 'white' }}>
                                            For my Further Skills you can visit my Linkedin on HomePage </div></span>
                                </div>
                            </div>
                        </div>
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
                            <button type="button" class="btn btn-primary" onClick={onlinkdin}>Know Me</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
