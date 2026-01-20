import React from 'react';
import "./styles.css"

export default function P({children,style}) {
  return (
    <div
        className='hide-scrollbar'
        style={{
            fontSize: "clamp(0.95rem, 0.9rem + 0.3vw, 1.05rem)",
            lineHeight: "1.5",
            margin: 0,
            maxHeight: "4.5em", 
            overflowY: "auto",
            textWrap:"balance",
            ...style
        }}
    >
        {children}
    </div>
  )
}
