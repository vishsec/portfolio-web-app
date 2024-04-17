"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial : {
        opacity:0,
        y: 100,
    },
    animate: (index: number) =>  ({
        opacity: 1,
        y: 0,
    transition: {
        delay: 0.05 * index,
    },
}),
}




export default function Skills() {

    const { ref, inView} = useInView();
      const { setActiveSection } = useActiveSectionContext();
    
      useEffect(() => {
        if(inView){
          setActiveSection('Skills');
        }
      }, [inView, setActiveSection]);


  return (
    <section ref={ref} id='skills' className='text-white mb-28 text-center scroll-mt-28 max-w-[53rem] sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-3 text-lg text-slate-900 font-semibold '>
            {
                skillsData.map((skill, index) => (
                    <motion.li 
                    className='bg-blue-300 border border-white/[0.1] rounded-xl px-5 py-2' 
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    custom={index}

                    >{skill}
                    </motion.li> 

                ))
            }
        </ul>
    </section>
  )
}
