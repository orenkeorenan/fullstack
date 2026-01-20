"use client"

import { useState } from "react"
import ContactModal from "../Modal/ContactModal"

export default function SendMailButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          marginTop: "0.5rem",
          padding: "0.6rem 0.9rem",
          borderRadius: "0.6rem",
          border: "1px solid rgba(0,0,0,0.15)",
          background: "white",
          cursor: "pointer",
          fontSize: "0.8rem",
          fontWeight: 500,
        }}
      >
        Send Message →
      </button>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  )
}
