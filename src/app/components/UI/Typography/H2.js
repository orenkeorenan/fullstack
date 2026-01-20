import React from 'react'

export default function H2({children}) {
  return (
    <h2
        style={{
            fontSize:"clamp(1.35rem, 1.5625rem + -2.2667vw, 1.5625rem)",
            opacity:"0.8",
            margin:"0",
        }}
    >
        {children}
    </h2>
  )
}
