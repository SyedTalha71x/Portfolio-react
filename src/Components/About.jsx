/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

export const About = (props) => {
    const onLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/syed-talha-hussain-93b490253/";
    };

    return (
        <section className="lg:py-24 md:py-20 sm:py-16 py-16 relative" id='about'>
            <div className="w-full max-w-[1500px] p-3 mx-auto">
                <div className="w-full justify-start items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <img 
                        className="w-full h-full rounded-3xl object-cover" 
                        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="About Us" 
                    />

                    <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                        <div className="w-full flex-col justify-start items-start gap-3 flex">
                            <h2 className="text-purple-900 text-4xl font-bold font-manrope leading-normal">
                                Career
                            </h2>
                            <p className="text-gray-500 text-base font-normal">
                                I'm Syed Talha Hussain, a passionate and dedicated Full Stack Engineer with expertise in the MERN stack, Automation, DevOps, and Cloud Infrastructure. Over the years, I've had the privilege of working with various startups, helping them build scalable and efficient solutions. Currently, I am a Software Engineer at Tesseract, where I continue to refine my skills and contribute to innovative projects.
                            </p>
                            <p className="text-gray-500 text-base font-normal">
                                My passion for technology stems from the thrill of solving complex problems and delivering impactful solutions. I thrive in dynamic environments where I can push the boundaries of what's possible, leveraging cutting-edge tools and techniques to drive success. Whether it's designing seamless user experiences or optimizing backend systems, I'm motivated by the desire to create solutions that make a difference.
                            </p>
                        </div>
                        <button 
                            className="w-fit px-4 py-2 bg-red-600 hover:bg-red-700 transition-all duration-500 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                            onClick={onLinkedin}
                        >
                            <span className="px-1.5 text-white text-sm font-medium leading-6">Know Me</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};