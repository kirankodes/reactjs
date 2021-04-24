import React from 'react';
import { NavLink } from 'react-router-dom';
import web from  "../src/images/naruto.jfif";
import Common from './common';


const About = () => {
    return (  
        <>
          <Common  
              name="Welcome to about we provide fast and accruate updates regarding your university "
              imgsrc ={web}
              visit="/contact"
              btname="Contact now"
          />
        </>
    );
}
 
export default About;