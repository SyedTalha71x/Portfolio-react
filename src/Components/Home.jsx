import React from 'react'
import { useRef } from 'react';


export const Home = (props) => {

    const refOpen = useRef(null);
    const refClose = useRef(null);

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

    return (
        <>
            <header className="main-home-page" style={{ boxShadow: props.mode === 'light' ? '' : '2px 2px 20px wheat', backgroundColor: props.mode === 'light' ? '' : '#06081d' }}>
                <div className="home-page">
                    <div className="home-content">
                        <h4>I'm Talha, a Professional Web Developer</h4>
                        <p>I am a passionate Full Stack Web Developer in the Software Industry.
                            Just hire me One time.
                        </p>
                        <div className="main-icons">
                            <i class="fa-brands fa-github" onClick={ongit}></i>
                            <i class="fa-brands fa-instagram" onClick={oninsta}></i>
                            <i class="fa-brands fa-linkedin" onClick={onlinkdin}></i>
                            <i class="fa-brands fa-facebook" onClick={onfb} ></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
