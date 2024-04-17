    "use client";
    import { projectsData } from "@/lib/data";
    import { useScroll, motion, useTransform } from "framer-motion";
    import Image from "next/image";
    import { useRef } from "react";

    type ProjectProps = (typeof projectsData[number]);

    export default function Project({title, description, tags, imageUrl,link} :
        ProjectProps)
        {
            const ref = useRef<HTMLElement>(null);
            const { scrollYProgress }= useScroll({
                target: ref,
                offset: ["0 1", "1.33 1"],
            });
            const scaleProgress = useTransform(scrollYProgress, [0, 1],[0.6, 1]);
            const opacityProgress = useTransform(scrollYProgress, [0, 1],[0.2, 1]);


        return ( <a href={link} target="_blank" rel="noopener noreferrer">
             <motion.section ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}
        
        className='group bg-slate-800 max-w-[42rem] overflow-hidden border-white/40 sm:pr-8 relative sm:h-[20rem]
        mb-4 sm:mb-8 last:mb-0 even:pl-8 hover:bg-slate-600 rounded-lg'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
        <h3 className='text-2xl font-semibold text-white'>
            {title}
            </h3>
            <p className='mt-2 leading-relaxed text-slate-300'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {tags.map((tag, index) => (
                    <li className='bg-slate-900 px-3 py-1 text-[0.7rem] rounded-full tracking-wider text-slate-400' key={index}>{tag}</li>
                ))}
            </ul>
        </div>

            <Image src={imageUrl} alt="project i worked on" quality={95} className="absolute top-8 -right-40
            w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 shadow-slate-600
            group-hover:-translate-x-3
            group-hover:-translate-y-3
            group-hover:-rotate-2
            group-hover:scale-105
            transition
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2" />
        </motion.section        >
        </a>
            )
        }