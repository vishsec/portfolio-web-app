"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contacts() {

    const { ref, inView} = useInView({
        threshold:1,
      });
      const { setActiveSection } = useActiveSectionContext();
    
      useEffect(() => {
        if(inView){
          setActiveSection('Contact');
        }
      }, [inView, setActiveSection]);

      const { pending } = useFormStatus();

  
  return (
    <motion.section 
    ref={ref}
    id='contact' 
    className='text-slate-200 mb-20 sm:mb-28 w-[min(100%, 38rem)] scroll-mt-18 py-28'
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:3 // use viewport{{once:true;}} if its annoying
    }}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-slate-200'>i would like you to contact me directly at 
        <a className='underline' 
        href='mailto:vishsecures@gmail.com'> vishsecures@gmail.com 
        </a> 
        or through this form.</p>

        <form className='mt-10 flex flex-col'

        action = {async formData => {

          // console.log('running on client')
          // console.log(formData.get('senderEmail'));
          // console.log(formData.get('message'));

          const{data, error} = await sendEmail(formData);

          if(error){
            toast.error(error);
            return;
          }

          toast.success('email sent successfully');
        }}
        >

            <input className='h-14 rounded-lg outline-none bg-slate-200 text-black p-4'
            type='email'
            name='senderEmail'
            required
            maxLength={500}
            placeholder='your email id' />
            <textarea className='outline-none h-52 my-3 rounded-lg p-4 text-black bg-slate-200' 
            placeholder='your message'
            name='message'
            required 
            maxLength={5000}/>

            <SubmitBtn/>
           
        </form>
    </motion.section>
  )
}
