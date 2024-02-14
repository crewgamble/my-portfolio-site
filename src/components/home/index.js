import React from "react";

import HeroImage from "../../images/gaming.jpg";
import { SocialIcon } from 'react-social-icons';
import Image from "next/image";

const Home = () => {
    return (
        <div name="home" className=" w-screen flex py-8 lg:p-32 bg-myColor2">
            {/* Flex container for text and image */}
            <div className="m-auto flex flex-col lg:flex-row gap-16 items-center justify-center lg:justify-between">
                {/* Text container */}
                <div className='flex flex-col gap-5 max-w-[600px]'>
                    <h1 className='m-auto text-5xl font-bold'>Welcome!👋🏻</h1>
                    <p className='text-lg text-center lg:text-left'>My name is Crew Gamble, I am a collegiate esports player and senior Computer Science student studying at Mizzou.</p>
                    <p className='text-lg text-center lg:text-left'>I have expertise in both front-end and back-end development and I am enthusiastic about broadening my knowledge in software engineering. My technical skills include programming languages such as C, Java, Python, JavaScript, and Typescript, alongside proficiency in HTML and CSS.</p>
                    <div className="m-auto">
                        <SocialIcon className="rounded-full transition ease-in-out delay-120 hover:bg-myColor1" bgColor="none" fgColor="black" label="My LinkedIn" url="https://www.linkedin.com/in/crewgamble/" target="_blank"/>

                        <SocialIcon className="rounded-full transition ease-in-out delay-120 hover:bg-myColor1" bgColor="none" fgColor="black" label="My GitHub" url="https://github.com/crewgamble" target="_blank"/>

                    </div>

                </div>

                {/* Image container */}
                <Image
                src={HeroImage}
                alt="photo of me"
                className="rounded-full lg:w-96 drop-shadow-lg max-w-xs lg:max-w-none"
                />
            </div>
        </div>
    );
};

export default Home;
