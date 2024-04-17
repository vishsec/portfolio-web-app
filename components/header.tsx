"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
    
    const{ activeSection, setActiveSection } = useActiveSectionContext();
  return (
    <header className='z-[999] relative'>
        <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 border-blue border-opacity-40 h-[4.5rem] w-full bg-slate-50 bg-opacity-60 
        shadow-lg shadow-white/[0.3] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full'
        initial={{ y:-100, x:"-50%", opacity:0 }}
        animate={{ y:0, x:"-50%", opacity:1 }}
        ></motion.div>

        <nav className='flex fixed top-[0.15rem] h-12 left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
            <ul className='text-slate-950 flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium 
            sm:flex-nowrap sm:w-[initial] sm:gap-5'>
                {
                    links.map(link => ( //we get data from data.ts
                        <motion.li className='h-3/4 flex items-center justify-center relative' key={link.hash}
                        initial={{ y:-100, opacity:0 }}
                        animate={{ y:0, opacity:1 }}>
                            <Link className={clsx('w-full flex items-center justify-center px-3 py-3 hover:text-white transition', {"text-slate-200": activeSection === link.name, })}
                              href={link.hash}
                              onClick={() => setActiveSection(link.name)}>
                              {link.name}

                              {
                                link.name === activeSection && (
                                    <motion.span className='bg-slate-500 rounded-full absolute inset-0 -z-10'
                                    layoutId='activeSection'
                                    transition={{
                                        type: 'spring',
                                        stiffness: 350,
                                        damping: 30
                                    }}></motion.span>
                                )
                              }
                              
                              </Link>
                           
                        </motion.li> 
                    ))
                }
            </ul>

        </nav>
    </header>
  )
}
