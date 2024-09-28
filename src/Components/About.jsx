/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

export const About = (props) => {
    const onlinkdin = () => {
        window.location.href = "https://www.linkedin.com/in/syed-talha-hussain-93b490253/";
    }

    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useinview]);

    return (
        <div 
            ref={ref} 
            className="lg:w-[85%] mx-auto mt-[7%] p-6 lg:rounded-xl md:rounded-xl sm:rounded-none rounded-none relative"
            id="abouts"
            style={{
                backgroundImage: `url('https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/body-background.9e7d96f6.png')`,
                backgroundSize: '150% 150%',  // Adjust this to zoom in and show only the top-left part of the image
                backgroundPosition: 'top left',  // Show only the top-left part of the image
                backgroundColor: props.mode === 'light' ? '#e9e9e9' : 'black',
                boxShadow: props.mode === 'light' ? '' : '4px 4px 30px #8d330f',
            }}
        >
            {/* Add a semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

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
                className="relative z-10 text-center flex flex-col items-center"
            >
                <h4 
                    className="text-2xl md:text-3xl font-bold text-white"
                >
                    About Me
                </h4>

                <div 
                    className="text-base md:text-lg mt-4 space-y-6 max-w-3xl text-white"
                >
                    <p>
                        I’m Syed Talha Hussain, a passionate and dedicated Full Stack Engineer with expertise in the MERN stack, Automation, DevOps, and Cloud Infrastructure. Over the years, I’ve had the privilege of working with various startups, helping them build scalable and efficient solutions. Currently, I am a Software Engineer at Tesseract, where I continue to refine my skills and contribute to innovative projects.
                    </p>
                    <p>
                        My passion for technology stems from the thrill of solving complex problems and delivering impactful solutions. I thrive in dynamic environments where I can push the boundaries of what's possible, leveraging cutting-edge tools and techniques to drive success. Whether it's designing seamless user experiences or optimizing backend systems, I’m motivated by the desire to create solutions that make a difference.
                    </p>
                </div>

                <button 
                    type="button" 
                    className="bg-red-600 mt-4 font-medium text-white py-2 px-8 lg:text-xl md:text-xl sm:text-md text-md rounded-md transition-all duration-500 ease-in-out hover:-translate-y-2 hover:bg-red-700"                    onClick={onlinkdin}
                >
                    Know Me
                </button>
            </motion.div>
        </div>
    );
}
