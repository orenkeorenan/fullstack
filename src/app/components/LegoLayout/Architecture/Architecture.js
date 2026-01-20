"use client"
import React, { useState } from "react"
import Hero from "../../UI/Hero/Hero"
import H3 from "../../UI/Typography/H3"
import P from "../../UI/Typography/P"
import H2 from "../../UI/Typography/H2"

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
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Hero
      className={className}
      style={{
        display: "flex",
        height: "100%",
        gap: "0.5rem",
        overflow: "hidden"
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: collapsed ? "24px" : "200px",
          transition: "0.2s ease",
          borderRight: "1px dashed rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          paddingRight: "0.25rem"
        }}
      >
        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            padding: "0.2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            opacity: 0.6
          }}
        >
          <H3>
            {collapsed ? "→" : "Dashboard ←"}
          </H3>
        </button>

        {!collapsed &&
          STEPS.map(step => (
            <div
              key={step.id}
              onClick={() => setActive(step)}
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
              <P>

                {step.title}
              </P>
            </div>
          ))}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap:"1rem"
        }}
      >
        <div
          style={{
            display:"flex",
            flexDirection:'column',
            gap:".5rem"
          }}
        >
          <H2>
            My Architecture Process
          </H2>
          <H3>
            {active.desc}
          </H3>
        </div>
        <P>
          {active.content}
        </P>
        {/* Visual and notes */}
        <div
          style={{
            borderTop: "2px dashed rgba(0,0,0,0.2)",
            paddingTop: "0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem"
          }}
        >
          <H3>
            Visual Thinking
          </H3>

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


    </Hero>
  )
}
