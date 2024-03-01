import React from 'react';
import { roles } from './data/data';
// React Icons
import { SiHey } from "react-icons/si";
import Typewriter from 'typewriter-effect';
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
        <h2 className="flex justify-start items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
          <span>Hello there</span><SiHey /><span>I am</span>
        </h2>
        <h1 className="text-6xl font-bold text-white sm:text-7xl">
          Sanjan Vadi
        </h1>
        <h2 className="flex pt-5 gap-2 text-xl font-bold text-white sm:text-2xl">
          I'm a
          <span className="text-xl font-bold text-teal-500 sm:text-2xl">
          <Typewriter
          options={{
            strings:roles,
            autoStart:true,
            loop:true
          }}
          />
          </span>
        </h2>
        <p className="text-md text-gray-300 leading-7 my-4 sm:text-lg sm:leading-8">
          A Software Developer with Master's in Computer Sciecne from Stevens Institute of Technology specializing in Full-stack Development and Cloud Development.
        </p>
        <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
          <button className="bg-teal-500 py-2 px-4 font-bold text-white border-2 border-teal-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="View Resume">
            <a href="/Sanjan_Vadi_Resume.pdf" target='_blank' className="flex justify-start items-center gap-1">
              <span>View Resume</span>
              <RiProfileLine />
              </a>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h4 className="text-xl text-white font-bold">Find me on :</h4>
          <ul className="flex justify-start items-center flex-wrap gap-4">
            <li title="LinkedIn">
              <a href="https://www.linkedin.com/in/sanjanvadi/" target="_blank" rel="noopener noreferrer"  className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiLinkedin />
              </a>
            </li>
            <li title="GitHub">
              <a href="https://github.com/sanjanvadi" target="_blank" rel="noopener noreferrer" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiGithub />
              </a>
            </li>
            <li title="Instagram">
              <a href="https://www.instagram.com/sanjan_vadi/" target="_blank" rel="noopener noreferrer" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiInstagram />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hero;