import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
    words: [
      "Hi! The Name's Adrian Ayala",
      "Just a guy that loves coffee, reading, mountain biking, and sleeping",
      "<ButLovesToLearnCoding />",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div>
      
    </div>
  )
}
