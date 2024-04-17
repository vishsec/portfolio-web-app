"use client";
import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
// import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';



export default function About() {

  const { ref, inView} = useInView({
    threshold:0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if(inView){
      setActiveSection('About');
    }
  }, [inView, setActiveSection]); //for the bg in navbar to slide when scrolling
  

  return (
    <section 
    ref ={ref}
    className='text-slate-200 mb-28 max-w-[48rem] text-center leading-8 scroll-mt-36' id='about'>
        <SectionHeading>About me</SectionHeading>
        
        <p className="mb-5 py-8">

        I had always wondered what makes me curious,{" "}
        <span className="font-medium">What am i passionate about</span>, I decided to pursue
        bachelors in programming. I joined several webinars ,read and learned{" "}
        <span className="font-medium">what was programming all about</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. i have used technologies like
        {" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I have also worked with java and php. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
    
        </p>
        <p>
        <span className="italic">When I &apos;m not coding</span>, I enjoy reading books
        , watching movies, . I also enjoy{" "}
        <span className="font-medium">learning about myself and people i interact with</span>. I often find myself
        listening to podcasts of influential people ,businesses and technologies{" "}
        <span className="font-medium"> which helps me grow as a person</span>.
        i have participated in various skits and NGOs which have helped me improve my interpersonal skills

        </p>
    </section>
  )
}
