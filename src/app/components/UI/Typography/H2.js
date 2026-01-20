import React from 'react'

export default function H2({children}) {
  return (
    <h2
        style={{
            fontSize:"clamp(1.3rem, 1.05rem + 1vw, 1.8rem)",
            opacity:"0.8",
            margin:"0",
        }}
    >
        {children}
    </h2>
  )
}
