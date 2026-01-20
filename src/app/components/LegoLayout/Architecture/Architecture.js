"use client"
import React, { useState } from "react"
import Hero from "../../UI/Hero/Hero"
import H3 from "../../UI/Typography/H3"
import P from "../../UI/Typography/P"
import H2 from "../../UI/Typography/H2"
import "./Architecture.css"

const STEPS = [
  {
    id: "idea",
    title: "Idea",
    desc: "What kind of problem do we solve?",
    content:
      "I start by identifying a real, meaningful problem. If the problem is unclear, the product will be unclear. I avoid building just because something sounds cool — it must solve a real need."
  },
  {
    id: "users",
    title: "Users",
    desc: "Who is this for?",
    content:
      "I define who will use the product and why. Different users have different pain points. Understanding them early prevents wasted features and confusing UX."
  },
  {
    id: "structure",
    title: "Structure",
    desc: "How should this system be organized?",
    content:
      "Before writing code, I design the system structure: modules, responsibilities, data flow, and boundaries. This keeps the project maintainable as it grows."
  },
  {
    id: "mvp",
    title: "MVP",
    desc: "What is the smallest useful version?",
    content:
      "I focus on the minimum version that already solves the problem. This allows fast feedback, quick iteration, and avoids overengineering."
  },
  {
    id: "scale",
    title: "Scale",
    desc: "How will this grow?",
    content:
      "I think about future features, traffic, and complexity early. This doesn’t mean building everything now — it means avoiding designs that will break later."
  }
]

export default function Architecture({ className }) {
  const [active, setActive] = useState(STEPS[0])
  const [collapsed, setCollapsed] = useState(true)

  const handleSelect = (step) => {
    setActive(step)
    setCollapsed(true) // auto-collapse after selection
  }

  return (
    <Hero className={className}>
      <div className="arch-container">
        {/* Sidebar */}
        <div className={`arch-sidebar ${collapsed ? "collapsed" : ""}`}>
          <button
            className="arch-toggle"
            onClick={() => setCollapsed(!collapsed)}
          >
            <H3>{collapsed ? "☰" : "←"}</H3>
          </button>

          {!collapsed &&
            STEPS.map((step) => (
              <div
                key={step.id}
                onClick={() => handleSelect(step)}
                style={{
                  cursor: "pointer",
                  padding: "0.35rem",
                  borderRadius: "0.4rem",
                  background:
                    active.id === step.id
                      ? "rgba(0,0,0,0.05)"
                      : "transparent",
                  fontWeight: active.id === step.id ? 600 : 400
                }}
              >
                <P>{step.title}</P>
              </div>
            ))}
        </div>

        {/* Content */}
        <div className="arch-content">
          <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
            <div
              style={{
                display:"flex",
                gap:"1rem",
                alignItems:"baseline",
              }}
            >
              <H2>My Architecture Process</H2>
              <P style={{fontSize: "0.9rem", opacity: 0.7, alignSelf: "center"}}>
                on {active.title}
              </P>
            </div>
            <H3>{active.desc}</H3>
          </div>

          <P>{active.content}</P>

          {/* Visual and notes */}
          <div className="arch-visual">
            <H3>Visual Thinking</H3>

            <div
              style={{
                border: "3px dashed rgba(0,0,0,0.2)",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                fontSize: "0.7rem",
                lineHeight: 1.4,
                opacity: 0.8
              }}
            >
              <P>
                {active.id === "idea" && (
                  <>
                    → Problem → Pain → Real need  
                    → Not a feature, a solution  
                    → Must exist even without UI  
                  </>
                )}

                {active.id === "users" && (
                  <>
                    → Beginner vs power user  
                    → Motivation matters  
                    → Context of use  
                  </>
                )}

                {active.id === "structure" && (
                  <>
                    UI → Logic → Data  
                    Clear boundaries  
                    Replaceable modules  
                  </>
                )}

                {active.id === "mvp" && (
                  <>
                    Core action only  
                    Manual allowed  
                    Ugly is fine  
                    Ship first  
                  </>
                )}

                {active.id === "scale" && (
                  <>
                    Bottlenecks  
                    Async boundaries  
                    Growth paths  
                  </>
                )}
              </P>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  )
}
