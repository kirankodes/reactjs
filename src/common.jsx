import React from 'react';
import { NavLink } from 'react-router-dom';
import web from  "../src/images/naruto.jfif";


const Common = (pass) => {
    return (  
        <>
           <section id="header" className="d-flex align-iteams-center">
           <div className="container-fluid nav_bg">
               <div className="row">
                    <div className=" col-10 mx-auto">
                    <div className="row">
                       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          
                          {/* <h1>
                              &nbsp;
                          </h1>
                          <h1>
                               &nbsp;
                          </h1> */}
                          
                           <h1> {pass.name}
                            <strong className="brand-name"> KiranKodes</strong></h1>
                           <h2 className="my-3">
                               Be ithe first and Know the updates super fast 
                           </h2>
                           <div className="mt-3">
                              <NavLink to={pass.visit} className="btn-get-started">{pass.btname}</NavLink>

                           </div>

                           </div>
                          
                           <div className="col-lg-6 order-1 order-lg-2 header-img">
                           {/* <h1> &nbsp;</h1>
                           <h1>&nbsp; </h1> */}
                               <img  src={pass.imgsrc} className="img-fluid animated" alt=""/>
                           </div>
                       </div>

                   </div>
               </div>
           </div>
           </section>
       
        </>
    );
}
 
export default Common ;
