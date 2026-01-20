"use client"

import React, { useState } from 'react'
import Hero from '../../UI/Hero/Hero'
import P from '../../UI/Typography/P'
import H3 from '../../UI/Typography/H3'
import H1 from '../../UI/Typography/H1'

export default function Career({ className }) {
  const items = [
  {
    id: 1,
    yearFrom: 2015,
    yearTo: 2019,
    where: "Kyungsung University",
    title: "Mechatronics",
    desc: [
      "Studied core engineering disciplines including mechanics, electronics, and control systems",
      "Built a strong foundation in system-level thinking and technical problem solving",
      "Worked on hands-on projects involving mechanical structures, automation, and basic programming",
      "Learned how hardware and software systems interact in real-world applications",
      "Developed analytical thinking for diagnosing and improving mechanical systems",
    ],
  },
  {
    id: 2,
    yearFrom: 2019,
    yearTo: 2019,
    where: "CheilMobile",
    title: "Mechanical Design Engineer",
    desc: [
      "Designed customized camper van interior structures (beds, tables, cabinets, storage units) using AutoCAD 2D",
      "Created production-ready technical drawings for CNC machining and on-site assembly",
      "Operated CNC machines to manufacture wooden panels and custom components with high precision",
      "Measured, verified, and adjusted component dimensions to fit exact vehicle interior specifications",
      "Identified mismatches between design and production early, preventing costly rework",
      "Solved real-time design and manufacturing issues to improve production efficiency",
      "Acted as a communication bridge between design and production teams",
      "Participated in new product research, internal structure optimization, and prototype testing",
      "Gained hands-on factory experience including cutting, assembly, disassembly, and on-site adjustments",
    ],
  },
  {
    id: 3,
    yearFrom: 2020,
    yearTo: 2024,
    where: "Kyungsung University",
    title: "Business Administration",
    desc: [
      "Studied core business concepts including marketing, operations, finance, and management",
      "Learned how organizations function from both strategic and operational perspectives",
      "Developed skills in planning, analysis, and decision-making",
      "Analyzed case studies on business growth, failure, and organizational design",
      "Built a strong understanding of customer behavior and market positioning",
    ],
  },
  {
    id: 4,
    yearFrom: 2020,
    yearTo: "Present",
    where: "OPPAPOST",
    title: "Logistics & Overseas Sales",
    desc: [
      "Founded and operated an international logistics and shipping business",
      "Managed end-to-end delivery workflows including warehousing, dispatch, and final-mile coordination",
      "Optimized shipping routes and logistics processes to reduce cost and delivery time",
      "Handled direct communication and negotiations with overseas clients and partners",
      "Monitored customer orders and resolved issues in real time to maintain service quality",
      "Planned and executed international expansion strategies",
      "Built internal operational processes from scratch",
      "Managed both strategic planning and on-site operations personally",
      "Maintained high service reliability through hands-on involvement in daily logistics",
    ],
  },
  {
    id: 5,
    yearFrom: 2025,
    yearTo: 2025,
    where: "HanChamp",
    title: "Field Support Officer",
    desc: [
      "Provided on-site support for Indonesian seafarers regarding work and daily living matters",
      "Assisted with visa applications, legal documents, and employment-related paperwork",
      "Mediated communication between workers and employers to resolve conflicts",
      "Handled emergency situations such as injuries, disputes, and hospital visits",
      "Traveled nationwide, including Jeju, to personally resolve field-level issues",
      "Identified recurring problems and reported improvement suggestions to management",
      "Acted as a problem-solver in unpredictable real-world situations",
      "Developed strong crisis response, communication, and negotiation skills",
    ],
  },
  {
    id: 6,
    yearFrom: 2025,
    yearTo: 2025,
    where: "Seongjin Precision",
    title: "Quality Control Intern",
    desc: [
      "Operated and monitored 3 production lines (6 machines) simultaneously",
      "Managed the full production cycle from raw material loading to final measurement",
      "Performed quality inspections at every cycle to detect defects early",
      "Calibrated machines and adjusted process conditions to maintain product standards",
      "Optimized machine operation settings to balance efficiency and defect rate",
      "Tracked and managed consumable parts and operational inventory",
      "Identified machine anomalies and performed immediate corrective actions",
      "Minimized downtime by proactively handling equipment issues",
    ],
  },
  {
    id: 7,
    yearFrom: 2025,
    yearTo: "Present",
    where: "KajagoTravel",
    title: "Travel Services",
    desc: [
      "Founded and operate a travel service company for both domestic and international clients",
      "Designed customized travel packages based on individual client needs",
      "Handled customer inquiries, bookings, and after-service communication",
      "Built long-term client relationships to increase repeat bookings",
      "Negotiated with local service providers such as guides, drivers, and photographers",
      "Planned and launched new travel products based on customer demand",
      "Executed overseas marketing and direct sales communication",
      "Managed all operations from sales to customer experience",
    ],
  },
];


  const [activeIndex, setActiveIndex] = useState(0)
  const current = items[activeIndex]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  return (
    <Hero
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {/* Header */}
      <H1>Career History</H1>
      <div
        style={{
          display:'flex',
          flexDirection:'column',
          gap:"1rem",
          position:"relative",
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '.3rem',
            alignItems: 'baseline',
          }}
        >
          <H3 style={{ margin: 0 }}>{current.title}</H3>
          <P 
            style={{ 
              opacity: 0.6 ,
              fontSize:"clamp(.8rem, 0.95rem + 0.4vw, 1rem)" 
            }}
          >
            {current.where}
          </P>
        </div>
        
        <div
          style={{
            display:"flex",
            gap:"1rem",
          }}
        >
          {/* Year */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 600,
              opacity: 0.8,
              flexWrap: 'wrap',
              padding:"0.5rem",
            }}
          >
            <P>{current.yearFrom}</P>
            <span style={{ opacity: 0.4 }}>—</span>
            <P>{current.yearTo}</P>
          </div>

          {/* Description */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              maxHeight:"130px"
            }}
          >
            {current.desc.map((d, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ opacity: 0.5, marginTop: "0.2rem" }}>•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* Footer */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            position:"absolute",
            right:0,
            top:0, 
            }}
          >
          <button
            onClick={handleNext}
            style={{
              background: 'none',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '999px',
              padding: '0.3rem 0.7rem',
              cursor: 'pointer',
              transition: 'all .2s ease',
            }}
          >
            →
          </button>
        </div>
      </div>
    </Hero>
  )
}
