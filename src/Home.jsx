import React from 'react';
import { NavLink } from 'react-router-dom';
import web from  "../src/images/itachi2.jfif";
import Common from './common';

const Home = () => {
    return (  
        <>
           <Common 
               name=" Know your university updates first from "
               imgsrc ={web}
               visit="/about"
               btname="get started"
          />
           
        </>
    );
}
 
export default Home;