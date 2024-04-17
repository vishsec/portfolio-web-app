import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn() {

    const { pending } = useFormStatus();

  return (
    <button 
    type='submit' 
    className='group flex items-center justify-center h-[3rem] w-[8rem] bg-slate-700
    text-white rounded-full outline-none transition-all gap-2 hover:bg-slate-800'
    disabled={pending}
    >
        {
            pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white '></div>: (
            <>
                Submit{" "}
                <FaPaperPlane 
                className='transition-all 
            group-hover:translate-x-1
            group-hover:-translate-y-1'/>
            </>

            )
        }       
    </button>   
  );
}
