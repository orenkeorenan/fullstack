import React from 'react'

export default function H2({children}) {
  return (
    <h2
        style={{
            fontSize:"clamp(1.2rem, 1rem + 0.6vw, 1.5rem)",
            opacity:"0.8",
            margin:"0",
        }}
    >
        {children}
    </h2>
  )
}
