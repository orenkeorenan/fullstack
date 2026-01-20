import React from 'react'

export default function H1({children}) {
  return (
    <h1
        style={{
            fontSize: "clamp(1.4rem, 1.9531rem + -3.5533vw, 1.9531rem)",
            lineHeight:"1.1",
            margin:"0",
        }}
    >
        {children}
    </h1>
  )
}
