"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDown, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Intro() {
  return (
    <section id='home' className='text-center mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem] '>

    <motion.h1
        className="mb-6 mt-4 px-4 py-32 text-2xl font-medium !leading-[1.5] sm:text-4xl text-slate-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
    >
        <span className="font-bold">Hello World, I'm Vishwajit.</span> A{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">a passion for developing,</span> {" "} I enjoy
        building <span className="font-sans">things on the web</span>,And I'm currently working on a{" "}
        <Link href='https://github.com/vishsec/business-app' target='_blank' className='underline font-bold'>MERN stack project</Link>.
    </motion.h1>

    <motion.div className='flex flex-col sm:flex-row gap-3 items-center justify-left px-4 text-lg font-semibold'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    style={{ margin: '-7rem auto' }}
    transition={{
        delay: 0.2,
    }}
    >
        <Link href='#contact' className='group bg-slate-500 text-black rounded-full px-5 py-1 flex items-center
        gap-2 hover:bg-slate-300 transition border border-white/35'>
            Contact me <BsArrowDown className='opacity-70 group-hover:translate-y-1 transition'/>
        </Link>
        <a 
        className='group bg-slate-500 text-black rounded-full px-5 py-1 flex items-center gap-2 
         hover:bg-slate-300 transition cursor-pointer border border-white/35'
        href='/cv.pdf'
        download>
            Download CV <HiDownload className='pacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a className='bg-slate-400 text-black rounded-full p-2 flex items-center gap-2
        hover:bg-slate-300 hover:text-black transition cursor-pointer border border-white/35'
        href='https://www.linkedin.com/in/vishwajit-avarsekar-95600621a/' target='_blank'>
            <BsLinkedin/>
        </a>
        <a className='bg-slate-400 text-black rounded-full p-2 flex items-center gap-2
        hover:bg-slate-300 hover:text-black transition cursor-pointer border border-white/35'
        href='https://github.com/vishsec' target='_blank'>
            <FaGithub/>
        </a>
        <a className='bg-slate-400 text-black rounded-full p-2 flex items-center gap-2
        hover:bg-slate-300 hover:text-black  transition cursor-pointer border border-white/35'
        href = 'https://twitter.com/vishsec' target='_blank'>
            <FaSquareXTwitter/>
        </a>
    </motion.div>


        

    </section>
  )
}
