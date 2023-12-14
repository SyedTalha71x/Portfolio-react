import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

export const ProjectModal2 = ({ visible, onClose }) => {
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
            <h5 className="modal-title" id="staticBackdropLabel">Project 2</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="modal-heading1">
              <h3>Portfolio Website</h3>
              <p>A Portfolio Website where a user can manage his all academics, resume and other things etc.</p>
              <div className="para-bullets">

                <p><span> 1.</span>  A fully Responsive Website design for client</p>
                <p><span> 2.</span>  Package like typed.js is used for enhance desiging</p>
                <p><span> 3.</span>  Enhance Validation used in Contact Section</p>
              </div>
              <div className="modal-tools">
                <div className="modaltools-h">
                  <h3>
                    Tools Used
                  </h3></div>
                <div className="bold-tools">

                  <h4>HTML</h4>
                  <h4>CSS</h4>
                  <h4>Javascript</h4>
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
