import React from 'react'

export default function Hero({
  children,
  className,
  style,
  onClick,
  ...props
}) {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.75rem",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
        ...style
      }}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

