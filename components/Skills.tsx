import React from "react"
import { motion } from "framer-motion"

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        Skills
    </motion.div>
  )
}

export default Skills