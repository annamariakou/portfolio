import "./page.css";

import Image from "next/image";
import AK from "/Images/AK.png";

export default function Home() {
  return (
    <main>
      <div className="mainContainer">
        <div className="about">
          <div class="typewriter-container">
            <h1 className="typewriter">Hello, I&apos;m Annamaria</h1>
            <p>
              A junior developer with full-stack skills and a passion for
              creating technology for good.
            </p>
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
    </main>
  );
}
