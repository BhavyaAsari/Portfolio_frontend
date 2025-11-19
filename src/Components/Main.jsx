import React, { useState } from "react";
import NavBar from "./navbar";
import Hero from "./Hero";
import Projects from "./project";
import Footer from "./footer";
import Skills from "./skills";
import { Contact } from "./contact";
import Purple from "../assets/purple.png"
import Education from "./Education";
import AnimatedCursor from "./AnimatedCursor";
const Main = () => {

    const [ showContact,setShowContact] = useState(false);

    return (

   <div
  className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${Purple})` }}
>

        <AnimatedCursor/>
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

export default Main;