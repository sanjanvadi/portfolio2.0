import React from "react";

// Experiences Data
import ski from "./data/data.js";

const Skills = () => {
    return (
        <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="skills">
            <h1 className="text-4xl text-teal-500 font-bold sm:text-5xl">#Skills</h1>
            <div className="py-6 pt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    ski ?
                        ski.map((skill, index) =>
                        <div 
                        key={index} 
                        className="border border-cyan-900 bg-slate-900 p-4 rounded hover:bg-slate-800 relative shadow-lg shadow-slate-500/50"
                        title={`${skill.title}`}
                    >
                        <b className="text-teal-700 text-sm bg-white py-1 px-2 rounded absolute left-3 -top-2 hover:bg-teal-500 hover:text-white">
                            {skill.title}
                        </b>
                        <div className="flex flex-wrap md:space-x-4 md:space-y-4 place-content-center">
                            {skill.skills.map((item,index)=>(
                                <div
                                    key={index} 
                                    style={{maxHeight:'45px'}}
                                    className="mt-4 ml-2 border border-cyan-100 p-2 sm:w-auto rounded-lg relative flex items-center shadow-lg shadow-slate-500/50 hover:bg-slate-900"
                                >
                                    <img src={item.image} alt={item.name} style={{ width: '24px', height: '24px' }} />
                                    <span className="ml-2 text-white">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                        )
                    : null
                }
            </div>
        </div>
    );
}

export default Skills;