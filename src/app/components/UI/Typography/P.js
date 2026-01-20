import React from 'react';
import "./styles.css"

export default function P({children,style}) {
  return (
    <div
        style={{
            fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.8rem)",
            lineHeight: "1.5",
            margin: 0,
            textWrap:"balance",
            maxHeight: "clamp(120px, 25vh, 260px)", 
            overflowY: "auto",
            ...style
        }}
    >
        {children}
    </div>
  )
}
