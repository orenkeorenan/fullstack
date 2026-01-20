import React from 'react'
import Hero from '../../UI/Hero/Hero'
import './Tools.css'

export default function Tools({ className }) {
    const toolList = [
        "React",
        "Node.js",
        "MySQL",
        "Railway",
        "Figma",
        "VS Code",
        "GitHub",
        "Notion",
        "REST API",
        "MySQL workbench",
        "Vercel",
        "Git",
        "HTML5",
        "CSS3",
        "JavaScript",
    ]

    const rows = 3
    const splitTools = Array.from({ length: rows }, (_, i) =>
        toolList.filter((_, index) => index % rows === i)
    )

    return (
        <Hero
            className={className}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "0.5rem",
                overflow: "hidden",
            }}
        >
            {splitTools.map((row, index) => (
                <div key={index} className="tools-row">
                    <div
                        className={`tools-track ${index % 2 === 0 ? 'to-right' : 'to-left'}`}
                    >
                        {[...row, ...row, ...row, ...row].map((tool, i) => (
                        <span key={i} className="tool-pill">
                            {tool}
                        </span>
                        ))}
                    </div>
                </div>
            ))}
        </Hero>
    )
}
