"use client"
import Image from "next/image";
import "./About.css"
import email from "/Images/email.png";

export default function About() {
    return (
      <div className="container">
        <div className="aboutAK">
          <h2 className="aboutTitle">ABOUT</h2>
          <div className="paragraph">
            <p>After years of working in climate tech marketing, I finally took the leap of faith to pursue a career in software development. What began as a self-taught journey, I soon got accepted into the School of Code amongst hundreds of candidates to follow my childhood dream.</p>
            <p>I&apos;m a passionate learner ready to deep dive into any project.</p>
          </div>
        </div>
        <div className="next">
        <h2 className="contactTitle">CONTACT</h2>
        <p className="email">
            <Image className="emailIcon" src={email} alt="email" />
            annamariakou@gmail.com</p>
        </div>
      </div>
    );
  }





