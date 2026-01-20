import React from 'react';
import './LegoLayout.css';
import Introduction from './Introduction/Introduction';
import Career from './Career/Career';
import ProjectList from './ProjectList/ProjectList';
import Tools from './Tools/Tools';
import ContactMe from './ContactMe/ContactMe';
import Architecture from './Architecture/Architecture';


export default function LegoLayout() {
  return (
    <div className='lego'>
        <Introduction 
            className="h1"
            image="/hero-ko.png"
            title="OREN BERNARDUS"
            subtitle="Fullstack Developer"
            description="I build software with a strong focus on real-world usability, system clarity, and long-term maintainability. With experience across engineering, logistics, and business operations, I don’t just write code—I design systems that make sense, scale well, and stay understandable. My goal is to create products that feel simple, reliable, and purposeful."
        />
        <Career className="h2"/>
        <ProjectList className="h3" />
        <Tools className="h4" />
        <ContactMe className="h5" />
        
        <Architecture className="h6" />
    </div>
  )
}

