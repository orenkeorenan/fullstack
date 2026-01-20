import React from 'react'

export default function H3({style, children}) {
  return (
    <h3
        style={{
            fontSize:"clamp(1.1rem, 1rem + 0.6vw, 1.4rem)",
            opacity:"0.6",
            margin:"0",
            ...style
        }}
    >
        {children}
    </h3>
  )
}
