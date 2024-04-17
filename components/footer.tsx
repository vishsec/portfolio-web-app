import React from 'react'

export default function Footer() {
  return (
    <footer className='text-slate-500 text-center mb-10 px-4'>
        <small className='mb-2 text-xs block'>
            &copy; 2040 Vishsec. All rights reserved.
        </small>
        <p className='text-xs'>
        <span className="font-semibold">About this website: </span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
        </p>
    </footer>
  );
}
