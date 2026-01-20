"use client"

import React, { useState } from 'react'
import Hero from '../../UI/Hero/Hero'
import H2 from '../../UI/Typography/H2'

export default function ProjectList({ className }) {
  const projects = [
    {
      id: 1,
      name: "Della Fleur",
      description: "A modern flower delivery app with real-time ordering.",
      image: "/DellaFleur_logo.png",
      startDate: "2026-01-13",
      endDate: "Current",
    },
    {
      id: 2,
      name: "CRUD",
      description: "A simple CRUD application to manage structured data.",
      image: "/CRUD_logo.png",
      startDate: "2026-01-13",
      endDate: "Current",
    },
    {
      id: 3,
      name: "Oppapost",
      description: "Warehouse logistics management system.",
      image: "/DellaFleur_logo.png",
      startDate: "2026-01-13",
      endDate: "Current",
    },
  ]

  const [activeProject, setActiveProject] = useState(null)

  return (
    <Hero
        className={className}
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
        }}
    >
        <H2>Project List</H2>

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                overflowY: "auto",
                height: "70px",
            }}
            >
            {projects.map((project) => (
                <div
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.2fr 2fr auto",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.45rem 0.6rem",
                        borderRadius: "0.4rem",
                        border: "1px solid rgba(0,0,0,0.12)",
                        cursor: "pointer",
                        fontSize: "0.82rem",
                        background: "#fff",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(0,0,0,0.03)"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#fff"
                    }}
                >
                    <strong style={{ fontWeight: 600 }}>
                        {project.name}
                    </strong>

                    <span
                        style={{
                            opacity: 0.65,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {project.description}
                    </span>

                    <span
                        style={{
                            fontSize: "0.7rem",
                            opacity: 0.5,
                        }}
                    >
                        {project.startDate}
                    </span>
                </div>
            ))}
        </div>


        {activeProject && (
            <div
            onClick={() => setActiveProject(null)}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
                padding: "1rem",
            }}
            >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                background: "white",
                padding: "2rem",
                borderRadius: "1rem",
                width: "100%",
                maxWidth: "500px",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
            >
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                }}
                >
                <div>
                    <h2 style={{ margin: 0 }}>{activeProject.name}</h2>
                    <span style={{ fontSize: "0.85rem", opacity: 0.6 }}>
                    {activeProject.startDate} — {activeProject.endDate}
                    </span>
                </div>

                <div
                    style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.1)",
                    flexShrink: 0,
                    }}
                >
                    <img
                    src={activeProject.image}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    />
                </div>
                </div>

                <p style={{ margin: 0, lineHeight: 1.6 }}>
                {activeProject.description}
                </p>

                <button
                onClick={() => setActiveProject(null)}
                style={{
                    alignSelf: "flex-end",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid rgba(0,0,0,0.2)",
                    background: "white",
                    cursor: "pointer",
                }}
                >
                Close
                </button>
            </div>
        </div>
      )}
    </Hero>
  )
}
