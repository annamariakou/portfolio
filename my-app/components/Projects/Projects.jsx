"use client"
import "./Projects.css"
import Image from "next/image";
import PlantSwapScreenshot from "/Images/PlantSwapScreenshot.png";
import SoCBrainScreenshot from "/Images/SoCBrainScreenshot.png";
import WeatherAppScreenshot from "/Images/WeatherAppScreenshot.png";

export default function Projects() {
    return (
        <div className="projectsContainer" id="Projects">
<h2 className="projectsTitle" >
    PROJECTS
</h2>

<section className="cards">
<article className="card">
                   <p className="projectName">SoCBrain</p>
                   <div className="imgWrap">
                   <Image
                   className="images"
                   src={SoCBrainScreenshot}
                   alt="SocBrain"
                   />
                   <div className="overlay">
                <div className="text">A slick and engaging quiz experience for the School of Code bootcampers to test their technical knowledge. It also allows SOC coaches to track technical progress via a user friendly dashboard view and allow analysation of data to improve the bootcampers&apos; learning experience.</div>
                   </div>
                   </div>
                   <div className="caption">
                   <p className="projectLink"><a href="https://github.com/annamariakou/SoCBrain" target="_blank" >GitHub Repo </a></p>
                   <p className="projectLink"><a href="https://socbrain.vercel.app/login" target="_blank">Live Link</a></p>
                   </div>
                </article>
                <article className="card">
                   <p className="projectName">Weather App</p>
                   <div className="imgWrap">
                   <Image
                   className="images"
                   src={WeatherAppScreenshot}
                   alt="WeatherApp"
                   />
                   <div className="overlay">
                   <div className="text">A minimalistic weather app, featuring the ability to select your current location, search any city, adjust from fahrenheit to celsius and view the 6 day forecast.</div>
                   </div>
                   </div>
                   <div className="caption">
                    <p className="projectLink"><a href="https://github.com/annamariakou/weather-app-" target="_blank">GitHub Repo</a></p>
                    <p className="projectLink"><a href="https://shiny-fenglisu-a30b72.netlify.app/" target="_blank">Live Link</a></p>
                    </div>
                </article>
                <article className="card">
                   <p  className="projectName">Plant Swap</p>
                   <div className="imgWrap">
                   <Image
                   className="images"
                   src={PlantSwapScreenshot}
                   alt="Plant Swap"
                   />
                   <div className="overlay">
                   <div className="text">A fun sustainable way to swap plants with your local community.</div>
                   </div>
                   </div>
                   <div className="caption">
                    <p className="projectLink"><a href="https://github.com/annamariakou/plant-swap-" target="_blank">GitHub Repo</a></p>
                    <p>🛠️ In Progress 🛠️</p>
                    </div>
                </article>
    </section>
</div>
)
}
