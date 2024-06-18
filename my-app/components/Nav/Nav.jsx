"use client"

import Image from "next/image";
import Hamburger from "/public/Images/hamburger.png"
import CloseMenu from "/public/Images/closeMenu.png"
import Logo from "/public/Images/codePURPLE.png"


import "./Nav.css"

import { useState } from "react";

export default function Nav() {

    const [isActive, setIsActive] = useState(false);
  
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
  
    return (
      <header> 
        <div className="logoName">
        <Image
          src={Logo}
          width={20}
          height={20}
          alt="code symbol"
          className="logo"
        /> <span className="name text2">Annamaria</span>
        </div>
        <p className="cvTwo">My CV</p>
        <nav className="navigation">
           <button className="menu" onClick={toggleActiveClass} >
            {isActive ? (
              <Image className={`hamburgerImgClosed ${isActive ? 'active' : ''}`} src={CloseMenu} alt="navclosed"></Image>  
            ):(
              <Image className="hamburgerImg" src={Hamburger} alt="navopen"></Image>
            )}
          </button>  
  
          <div className={`mainNav ${isActive ? 'active' : 'mainNavInactive'}`}>
            <ul>
              <li>HOME</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </nav>
        <p className="cv">My CV</p>
      
      </header>
    ); 
  }