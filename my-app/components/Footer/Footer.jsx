"use client"

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footerText">
        <p>Hosted on netlify. Built with next.js. Open-sourced on <a href="https://github.com/annamariakou/portfolio" target="_blank" className="githubLink">github</a>.</p>
        <p >© 2024 by Annamaria</p>
        </div>
      </div>
    </footer>
  );
}