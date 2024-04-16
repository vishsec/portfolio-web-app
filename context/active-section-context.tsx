"use client";

import { links } from '@/lib/data';
import React, { useState, createContext, useContext } from 'react'

type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
};

export const ActiveSectionContext = 
createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider( {  children } : {children: React.ReactNode;}) { //props can be written in a seperate type like type props = {children: React.ReactNode;}
    type SectionName = (typeof links)[number]['name'];

    const [activeSection, setActiveSection] = useState<SectionName>('Home');
  return(
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
    }}>
        {children}
    </ActiveSectionContext.Provider>
  ); 
}

// to handle null values in activeSection we use hook

export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);

  if(context === null) {
    throw new Error(
      "useContextSection must be within an ActiveSectionCOnextProvider"
    );
  }
  return context;
}
