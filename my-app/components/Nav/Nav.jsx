"use client"

import Image from "next/image";
import Hamburger from "/public/Images/hamburger.png"
import CloseMenu from "/public/Images/closeMenu.png"
import Logo from "/public/Images/codePURPLE.png"

import Link from 'next/link';


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
        <p className="cvTwo"><a href="/CV/AnnamariaCV.pdf" target="_blank">My CV</a></p>
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
              <li className="home"><Link href="#Annamaria">HOME</Link></li>
              <li className="projects"><Link href="#Projects">PROJECTS</Link></li>
              <li className="skills"><Link href="#Skills">SKILLS</Link></li>
              <li className="about"><Link href="#About">ABOUT</Link></li>
              <li className="contact"><Link href="#Contact">CONTACT</Link></li>
            </ul>
          </div>
        </nav>
        <p className="cv"><a href="/CV/AnnamariaCV.pdf" target="_blank">My CV</a></p>
      
      </header>
    ); 
  }