import React from 'react'

export const PrimaryFooter = () => {
    const oncheck = () => {
        window.location.href = '/Home.jsx'
    }
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
        <div className="primary-footer">
            <div className="prime-footer">
                <div className="left-footer">
                    <div className="footer-content">
                        <h4>Syed Talha Hussain</h4>
                        <p>A focused Full Stack Web Developer building Frontend and Backend of Websites and Web Applications
                            that leads to the success of the overall product.Learning new things in this era.
                        </p>
                        <button className="foot-btn btn-primary" onClick={oncheck}>See info</button>
                    </div>
                </div>
                <div className="right-footer">
                    <div className="main-footer-icons">
                        <i class="fa-brands fa-github" onClick={ongit}></i>
                        <i class="fa-brands fa-instagram" onClick={oninsta}></i>
                        <i class="fa-brands fa-linkedin" onClick={onlinkdin}></i>
                        <i class="fa-brands fa-facebook" onClick={onfb} ></i>

                    </div>
                </div>

            </div>
        </div>
    )
}
