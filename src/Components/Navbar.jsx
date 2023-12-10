import React from 'react'
import video1 from '../assets/bgvideo.mp4'

export const Navbar = (props) => {
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
            <video src={video1} autoPlay loop muted></video>
            <div className="overlay"></div>
            <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
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
                        <button type="button" className="btn btn-primary" onClick={props.togglemode}>Dark Mode</button>
                    </div>
                </div>
            </nav>

            <div className="home">

                <div className="home-content">
                    <div className="heading">
                        <h2>I'm, <span>Talha</span> a Professional Web Developer</h2>
                        <p>I am a passionate Web Developer in the Software industry. Just hire me one time!</p>
                        <div className="main-icons">
                            <i class="fa-brands fa-facebook" onClick={onfb}></i>
                            <i class="fa-brands fa-github" onClick={ongit}></i>
                            <i class="fa-brands fa-instagram" onClick={oninsta}></i>
                            <i class="fa-brands fa-linkedin" onClick={onlinkdin}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
