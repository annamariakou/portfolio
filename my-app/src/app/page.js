import "./page.css";

import Image from "next/image";
import AK from "/Images/AK.png";
import Projects from "/components/Projects/Projects.jsx";
import Github from "/Images/Github.png";
import Linkedin from "/Images/Linkedin.png";
import Twitter from "/Images/Twitter.png";

export default function Home() {
  return (
    <main>
      <div className="mainContainer">
        <div className="about">
          <div className="typewriter-container">
            <h1 className="typewriter">Hello, I&apos;m Annamaria</h1>
            <p>
              // A junior developer with full-stack skills and a passion for
              creating technology for good.
            </p>
          </div>
          <div className="socials">
            <a href="https://github.com/annamariakou" target="_blank">
              <Image className="github" src={Github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/annamariakou/" target="_blank">
              <Image className="linkedin" src={Linkedin} alt="Github" />
            </a>
            <a href="https://x.com/AnnamariaKou" target="_blank">
              <Image className="twitter" src={Twitter} alt="Github" />
            </a>
          </div>
        </div>
        <Image
          className="me"
          src={AK}
          width={450}
          height={450}
          alt="Annamaria K"
        />
      </div>
      <Projects />
    </main>
  );
}
