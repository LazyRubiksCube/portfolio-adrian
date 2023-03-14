import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
   <article>
    <motion.img
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
      object-center'
    />

    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Proccess Assistant</h4>
        <p className='font-bold text-2xl mt-1'>Amazon</p>
        <div>
            {/* Tech used */}
            {/* Tech used */}
            {/* Tech used */}
        </div>
        <p>Started... - Ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
        </ul>
    </div>
   </article>
  )
}