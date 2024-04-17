"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';


export default function Projects() {

    
  const { ref, inView} = useInView({
    threshold:0.4,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if(inView){
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id='projects' className='text-white scroll-mt-2 py-40 mb-28'>
        <SectionHeading>My Projects</SectionHeading>
        
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
          
        </div>
        
    </section>
  );
}


