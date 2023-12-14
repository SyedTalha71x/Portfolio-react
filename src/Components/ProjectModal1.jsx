import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

export const ProjectModal1 = ({ visible, onClose }) => {
    if (!visible) return null;

    const onhandleClose = () => {
        onClose();
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
        <div ref={ref} className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Project 1</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-heading1">
                            <h3>Notebook Application</h3>
                            <p>A Notebook Application where a user can manage his Notes on Cloud.</p>
                            <div className="para-bullets">

                                <p><span> 1.</span>  A proper Login/Signup Authentication for User to access his Notes.</p>
                                <p><span> 2.</span>    Express Validator package has been used for Validation.</p>
                                <p><span> 3.</span>   Json Web Token is used for user Authentication Token.</p>
                                <p><span> 4.</span>    For enhance Security npm bcrypt package is used for hashing of password.</p>
                            </div>
                            <div className="modal-tools">
                                <div className="modaltools-h">
                                    <h3>
                                        Tools Used
                                    </h3></div>
                                <div className="bold-tools">

                                    <h4>React.js</h4>
                                    <h4>Node.js</h4>
                                    <h4>MongoDB</h4>
                                    <h4>Bootstrap</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
