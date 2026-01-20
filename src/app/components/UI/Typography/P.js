import React from 'react';
import "./styles.css"

export default function P({children,style}) {
  return (
    <div
        className='hide-scrollbar'
        style={{
            fontSize: "clamp(1rem, 1.25rem + -1.3333vw, 1.1rem)",
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
