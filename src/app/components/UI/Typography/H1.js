import React from 'react'

export default function H1({children}) {
  return (
    <h1
        style={{
            fontSize: "clamp(1.8rem, 1.2rem + 2vw, 3rem)",
            lineHeight:"1.1",
            margin:"0",
        }}
    >
        {children}
    </h1>
  )
}
