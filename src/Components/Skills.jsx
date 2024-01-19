import React from 'react'

const Skills = (props) => {
    return (
        <div>
            <div className='skills_section ' style={{ backgroundColor: props.mode === 'light' ? '' : 'black', boxShadow: props.mode === 'light' ? '' : '4px 4px 30px #8d330f' }}>
                <div className="skills_row">
                    <div className="left-skills">
                        <div className="sectionheading">
                            <h1 style={{ color: props.mode === 'light' ? '' : 'white' }}>expert in following things</h1>
                            <div className="rowgap">
                                <div>Html</div>
                                <div>Css</div>
                                <div>Javascript</div>
                                <div>Tailwind</div>
                                <div>Next.js</div>
                                <div>React.js</div>
                                <div>Node.js</div>
                                <div>MongoDB</div>
                            </div>
                        </div>

                    </div>
                    <div className="right-skills">
                        <img className='skills_img' src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills