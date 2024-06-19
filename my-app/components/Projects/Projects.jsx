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
                   <div className="imgWrap">
                   <Image
                   className="images"
                   src={SoCBrainScreenshot}
                   alt="SocBrain"
                   />
                   <div className="overlay">
                   <div className="text">A slick and engaging quiz experience for the School of Code bootcampers to test their technical knowledge. It also allows SOC coaches to track technical progress via a user friendly dashboard view and allow analysation of data to improve the bootcampers' learning experience.</div>
                   </div>
                   </div>
                   <div className="caption">
                   <p>GitHub Repo</p>
                   <p>Live link</p>
                   </div>
                </article>
                <article className="card">
                   <p>Weather App</p>
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
                    <p>GitHub Repo</p>
                    <p>Live link</p>
                    </div>
                </article>
                <article className="card">
                   <p>Plant Swap</p>
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
                    <p>GitHub Repo</p>
                    <p>🛠️ In progress 🛠️</p>
                    </div>
                </article>
    </section>
</div>
)
}
