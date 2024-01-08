import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

export const Services = (props) => {

    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    }, [useinview]);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={maincontrols}
            transition={{
                duration: 0.7, delay: 0.25
            }}

            className='mainservicecontainer' ref={ref}>
            <div className="servicesection">
                <h1>Why people choose us</h1>
                <p>My services are always outstanding as i always focus on my clients for proviging them the best things</p>
            </div>

            <div className="service_row">
                <div className="one_row">
                    <div>
                        <i class="fa-solid fa-laptop-file icons" ></i>
                    </div>
                    <div className="semiserviceheading">Web Development</div>
                    <p>I will provide you the best Quality Websites interfaces.</p>
                </div>
                <div className="two_row">
                    <div>
                        <i className="fa-brands fa-creative-commons-nd icons" ></i>
                    </div>
                    <div className="semiserviceheading">Web Designs</div>
                    <p>I will provide you the best Frontend and Backend development code.</p>
                </div>
                <div className="three_row">
                    <div>
                        <i class="fa-solid fa-user-pen icons" ></i>
                    </div>
                    <div className="semiserviceheading">Support 24/24</div>
                    <p>I will be always their for my clients when they need any help.</p>
                </div>
            </div>

        </motion.div>
    )
}
