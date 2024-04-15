

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project';

export default function Projects() {
  return (
    <section id='projects' className='text-white scroll-mt-2 py-40'>
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


