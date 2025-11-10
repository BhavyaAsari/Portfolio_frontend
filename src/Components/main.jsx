import React, { useState } from "react";
import NavBar from "./navbar";
import Hero from "./hero";
import Projects from "./project";
import Footer from "./footer";
import Skills from "./skills";
import { Contact } from "./contact";
import Purple from "../assets/purple.png"
import Education from "./Education";
const main = () => {

    const [ showContact,setShowContact] = useState(false);

    return (

   <div
  className="min-h-screen p-10 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${Purple})` }}
>

        <NavBar/>
        {/*  Pass the function to Hero */}
        <Hero onShowContact={() => setShowContact(true)}/>
              {/*  Show contact section when button is clicked */}
        {showContact && (

             <div className="animate-fadeIn mt-10">
                <Contact/>
                </div>
        )}
        <Projects/>
        <Skills/>
        <Education/>

        
        <Footer/>
    </div>
    )
   
} 

export default main;