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
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page e"
        />
        <Career className="h2"/>
        <ProjectList className="h3" />
        <Tools className="h4" />
        <ContactMe className="h5" />
        
        <Architecture className="h6" />
    </div>
  )
}

