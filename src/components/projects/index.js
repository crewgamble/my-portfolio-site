import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { projectDetails } from "./projectData";
import Image from "next/image";

const Projects = () => {
    return (
        <div className=' w-screen p-4 lg:p-16 flex flex-col text-myColor2 overflow-hidden relative'>
                        <div className='absolute w-[200%] h-[200%] -left-[50%] -top-[50%] bg-gradient-to-br from-myColor3 via-myColor4 to-myColor5'/>
            <h1 className='mx-auto text-3xl lg:text-6xl text-myColor2 font-semibold p-16 z-20'>My Projects</h1>
            <div className='flex flex-col gap-16 lg:gap-32 z-10'>
                {projectDetails.map((project, index) => 
                    <div key={project.name} className={
                        project.name === 'Daily Doodle' ? 'mx-auto bg-[#FFC31F] lg:w-[800px] bg-opacity-50 border p-4 pb-8 border-[#FFC31F] rounded-3xl' : 
                        project.name === 'Mushroom Classification Neural Net' ? 'mx-auto bg-[#92D293] lg:w-[800px] bg-opacity-50 border p-4 pb-8 border-[#92D293] rounded-3xl' :  
                        project.name === 'Wine Quality Neural Net' ? 'mx-auto bg-[#305187] lg:w-[800px] bg-opacity-50 border p-4 pb-8 border-[#305187] rounded-3xl' : 
                        project.name === 'Cute Crypto' ? 'mx-auto bg-[#D1737F] lg:w-[800px] bg-opacity-50 border p-4 pb-8 border-[#D1737F] rounded-3xl' : 
                        ''}
                    >
                        <div className='flex'>
                            <Image alt='Project Logo' src={project.logo} className='h-24 w-24 lg:h-[220px] lg:w-[220px] rounded-3xl'/>
                            <div className='lg:mt-5 p-4 md:p-2 md:px-8 lg:p-8 select-none'>
                                <h1 className='text-xl md:text-4xl lg:text-5xl font-bold mb-4'>{project.name}</h1>
                                <h2 className='text-sm md:text-lg lg:text-xl font-semibold'>{project.tags}</h2>
                            </div>
                        </div>
                        <div className='mx-8 lg:mx-16 mt-8 text-sm  md:text-xl visible opacity-100 transition-all duration-300'>
                            <p className='whitespace-pre-wrap'>{project.desc}</p>
                            <div className='flex gap-4'>
                            {project.websiteURL !== '' ? (
                                <button type='button' className='flex mt-8 font-bold text-lg'>
                                    <a href={project.websiteURL} target='_blank' className='flex translate-x-0 hover:translate-x-2 transition-all'>
                                        Visit site <IoIosArrowForward className='mt-2'/>
                                    </a>
                                </button>
                            ):(<></>)}
                            {project.repoURL !== '' ? (
                                <button type='button' className='flex mt-8 font-bold text-lg'>
                                    <a href={project.repoURL} target='_blank' className='flex translate-x-0 hover:translate-x-2 transition-all'>
                                        Visit Repo <IoIosArrowForward className='mt-2'/>
                                    </a>
                                </button>
                            ):(<></>)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Projects