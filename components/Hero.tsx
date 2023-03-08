import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

// Introduction text along with several bits about me
export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
    words: [
      "Hi! The name's Adrian Ayala.",
      "Just a guy that loves coffee, reading, mountain biking, and sleeping.",
      "<ButLovesToLearnCoding />",
      "Oh! I also love Warhammer 40K"
    ],
    loop: true,
    delaySpeed: 4000,
  });
// 
  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='F7AB0A'/>
      </h1>  
    </div>
  )
}
