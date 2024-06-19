"use client"

import "./Skills.css"

export default function Skills() {
    return (
        <div className="skillsContainer">
        <h2 className="skillsTitle" id="Skills">SKILLS</h2>
        <section className="skillCards">
            <article className="skillCard">
        <p className="languages">Languages</p>
        <p>Javascript</p>
        <p>Typescipt</p>
        <p>CSS</p>
        </article>
        <article className="skillCard">
        <p className="frontend">Front End</p>
        <p>React</p>
        <p>Next.js</p>
        <p>Vite</p>
        <p>Tailwind CSS </p>
        <p>Bootstrap</p>
        </article>
        <article className="skillCard">
        <p className="backend">Back End</p>
        <p>SQL</p>
        <p>REST API</p>
        <p>Express</p>
        <p>Node.js</p>
        <p>Supabase</p>
        <p>AWS</p>
        </article>
        <article className="skillCard">
        <p className="design">Design</p>
        <p>UX/UI</p>
        <p>Figma</p>
        <p>Accesibility</p>
        </article>
        <article className="skillCard">
        <p className="testing">Testing</p>
        <p>Playwright</p>
        <p>Vitest</p>
        </article>
        </section>
      
</div>
    )
} 