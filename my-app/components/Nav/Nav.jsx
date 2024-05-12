"use client"

import Image from "next/image";
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
        <Image
          src={Logo}
          width={30}
          height={30}
          alt="code symbol"
          className="logo"
        /> <span className="name">Annamaria</span>
        <nav className="navigation">
          {/* <button className="menu" onClick={toggleActiveClass} >
            {isActive ? (
              <Image className={`hamburgerImgClosed ${isActive ? 'active' : ''}`} src={CloseMenu} alt="navclosed"></Image>  
            ):(
              <Image className="hamburgerImg" src={Hamburger} alt="navopen"></Image>
            )}
          </button>  */}
  
          <div className={`mainNav ${isActive ? 'active' : 'mainNavInactive'}`}>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
  
        </nav>
      </header>
    ); 
  }