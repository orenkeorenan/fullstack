"use client"

import React, { useState } from 'react'
import Hero from '../../UI/Hero/Hero'
import H2 from '../../UI/Typography/H2'
import H1 from '../../UI/Typography/H1'
import P from '../../UI/Typography/P'

export default function Career({ className }) {
  const items = [
    {
      id: 1,
      yearFrom: 2015,
      yearTo: 2019,
      where: "Kyungsung University",
      title: "Mechatronics",
      desc: [
        "Learned something here",
        "Learned something here 2",
        "Learned something here 3",
      ],
    },
    {
      id: 2,
      yearFrom: 2019,
      yearTo: 2019,
      where: "CheilMobile",
      title: "기계설계",
      desc: [
        "Worked on mechanical design",
        "Collaborated with engineers",
        "Handled production drawings",
      ],
    },
    {
      id: 3,
      yearFrom: 2020,
      yearTo: 2024,
      where: "Kyungsung University",
      title: "경영대학과",
      desc: [
        "Studied business",
        "Marketing basics",
        "Management principles",
      ],
    },
  ]

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
        justifyContent:"center"
      }}
    >
      {/* Header */}
      <H1>Career History</H1>
      <div
        style={{
          display:'flex',
          flexDirection:'column',
          gap:"1rem",
          position:"relative"
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
          <H2 style={{ margin: 0 }}>{current.title}</H2>
          <P style={{ opacity: 0.6 }}>
            {current.where}
          </P>
        </div>
        
        <div
          style={{
            display:"flex",
            gap:"1rem",
            alignItems:"center"
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
            <span>{current.yearFrom}</span>
            <span style={{ opacity: 0.4 }}>—</span>
            <span>{current.yearTo}</span>
          </div>

          {/* Description */}
          <P
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem',
              opacity: 0.85,
              flex: 1,
            }}
          >
            {current.desc.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </P>
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
