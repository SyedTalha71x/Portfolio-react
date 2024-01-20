import React, { useEffect, useRef } from 'react'
import video1 from '../assets/bgvideo.mp4'
import video2 from '../assets/bgvideo2.mp4'
import { motion, useInView, useAnimation } from "framer-motion"
import { BsBrowserFirefox } from "react-icons/bs";

export const Navbar = (props) => {

    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    }, [useinview]);

    const ongit = () => {
        window.location.href = "https://github.com/SyedTalha71x";
    }
    const onlinkdin = () => {
        window.location.href = "https://www.linkedin.com/in/syed-talha-hussain-93b490253/";
    }

    const oninsta = () => {
        window.location.href = "https://www.instagram.com/pycess._.76x/";
    }
    const onfb = () => {
        window.location.href = "https://www.facebook.com/profile.php?id=100087213146279";
    }
    const { title } = props;
    return (
        <>
            <video src={video2} autoPlay loop muted></video>
            <div className="overlay"></div>
            <nav className="nav navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container-fluid">
                    {/* <BsBrowserFirefox className='nav-logo' /> */}
                    <a className="navbar-brand nav-title" href="#"> <span>  {props.title.toUpperCase()}  </span>  </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav_items navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./#abouts">About</a>
                            </li>

                        </ul>
                        <button type="button" className="navbtn " onClick={props.togglemode}>Dark Mode</button>
                    </div>
                </div>
            </nav>

            <div
                className="home">

                <div

                    className="home-content">
                    <div className="heading-home">
                        <div className='miniheading'>
                            <h2 >
                                HEY  I'M, <span>TALHA</span>
                            </h2>
                        </div>
                        <div>

                            <h2 className='secheading'> A PROFESSIONAL WEB DEVELOPER</h2>
                        </div>
                        <p>I am a passionate Web Developer in the Software industry. Just hire me one time!</p>
                        <div className="hireme">
                            <a href="./#contact">
                                <button type="button" className="hirebtn">Hire me</button>
                            </a>
                        </div>
                        <div className="main-icons">
                            <i className="fa-brands fa-facebook" onClick={onfb}></i>
                            <i className="fa-brands fa-github" onClick={ongit}></i>
                            <i className="fa-brands fa-instagram" onClick={oninsta}></i>
                            <i className="fa-brands fa-linkedin" onClick={onlinkdin}></i>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
