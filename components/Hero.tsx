import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import profilePic from '/Users/adrianayala/_code/projects/FullstackAcademy/foundations/portfolio-adrian/public/bw_profile.jpg';

type Props = {};

// Introduction text along with several bits about me
export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
    words: [
      "Hi! The name's Adrian Ayala.",
      "Just a guy that loves coffee, reading, mountain biking, and sleeping.",
      "<ButLovesToLearnCoding />",
      "Oh! I also love Warhammer 40K",
    ],
    loop: true,
    delaySpeed: 2000,
  });
// 
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={profilePic}
        alt='bw photo of Adrian'
        // width={100}
        // height={100}
      />
      <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div>
          <button>About</button>
          <button>Experience</button>
          <button>Skills</button>
          <button>Projects</button>
        </div>
      </div>
    </div>
  );
}
