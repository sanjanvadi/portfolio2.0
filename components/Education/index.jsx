import React from "react";

// Experiences Data
import education from "./data/data.js";

const Education = () => {
    return (
        <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="education">
            <h1 className="text-4xl text-teal-500 font-bold sm:text-5xl">#Education</h1>
            <div className="py-6 pt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    education ?
                        education.map((education, index) =>
                            <div 
                                key={index} 
                                className="border border-cyan-900 bg-slate-900 p-4 rounded hover:bg-slate-800 relative shadow-lg shadow-slate-500/50"
                                title={`${education.job_title} @${education.company}`}>
                                <b className="text-teal-700 text-sm bg-white py-1 px-2 rounded absolute left-3 -top-2 hover:bg-teal-500 hover:text-white">
                                    {education.company}
                                </b>
                                <h2 className="mt-4 mb-2 text-xl font-bold text-teal-500">
                                    {education.year}
                                </h2>
                                <h3 className="font-bold text-2xl text-white">
                                    {education.job_title}
                                </h3>
                                <p className="mt-2 leading-6 text-sm text-gray-200">
                                    {education.description}
                                </p>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    );
}

export default Education;