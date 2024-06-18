"use client"
import "./Projects.css"
import Image from "next/image";
import PlantSwapScreenshot from "/Images/PlantSwapScreenshot.png";
import SoCBrainScreenshot from "/Images/SoCBrainScreenshot.png";
import WeatherAppScreenshot from "/Images/WeatherAppScreenshot.png";

export default function Projects() {
    return (
        <div className="projectsContainer">
<h2 className="projectsTitle">
    PROJECTS
</h2>

<section className="cards">
<article className="card">
                   <p>SoCBrain</p>
                   <Image
                   className="images"
                   src={SoCBrainScreenshot}
                   alt="SocBrain"
                   />
                </article>
                <article className="card">
                   <p>Weather App</p>
                   <Image
                   className="images"
                   src={WeatherAppScreenshot}
                   alt="WeatherApp"
                   />
                </article>
                <article className="card">
                   <p>Plant Swap</p>
                   <Image
                   className="images"
                   src={PlantSwapScreenshot}
                   alt="Plant Swap"
                   />
                </article>
    </section>
</div>
)
}
