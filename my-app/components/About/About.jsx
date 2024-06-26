"use client"
import Image from "next/image";
import "./About.css"
import email from "/Images/email.png";

export default function About() {
    return (
      <div className="aboutContainer" id="About">
        <div className="aboutAK">
          <h2 className="aboutTitle" >ABOUT</h2>
          <div className="paragraph">
            <p>After years of working in climate tech marketing, I finally took the leap of faith to pursue a career in software development. What began as a self-taught journey, I soon got accepted into the School of Code amongst hundreds of candidates to follow my childhood dream. Through this experience I learned industry best practices and standards working in an agile envrionment across 13 different teams contributing to the build and design of various projects.</p>
            <p>I&apos;m a passionate learner ready to deep dive into any project. When I&apos;m not coding I enjoy taking care of my plants and cooking different cuisines.</p>
            <p>Feel free to connect with me on <a className="linkedinLink" href="https://www.linkedin.com/in/annamariakou/" target="_blank">LinkedIn</a> or email me if you&apos;d like to get in touch.</p>
          </div>
        </div>
        <div className="next">
        <h2 className="contactTitle" id="Contact">CONTACT</h2>
        <p className="email">
            <Image className="emailIcon" src={email} alt="email" />
            annamariakou@gmail.com</p>
        </div>
      </div>
    );
  }





