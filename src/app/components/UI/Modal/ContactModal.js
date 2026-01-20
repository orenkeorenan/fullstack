"use client"

export default function ContactModal({ onClose }) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={headerStyle}>
          <strong>Send me a message</strong>
          <button onClick={onClose} style={closeStyle}>✕</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <input placeholder="Your name" style={inputStyle} />
          <input placeholder="Your email" style={inputStyle} />
          <textarea placeholder="Your message" rows={4} style={inputStyle} />
        </div>

        <a
          href="mailto:bernardusoren123@gmail.com"
          style={sendStyle}
        >
          Send Message →
        </a>
      </div>
    </div>
  )
}



const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
}

const modalStyle = {
  background: "white",
  borderRadius: "1rem",
  padding: "1rem",
  width: "90%",
  maxWidth: "320px",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

const closeStyle = {
  background: "none",
  border: "none",
  fontSize: "1rem",
  cursor: "pointer",
}

const inputStyle = {
  padding: "0.5rem 0.6rem",
  borderRadius: "0.4rem",
  border: "1px solid rgba(0,0,0,0.2)",
  fontSize: "0.8rem",
}

const sendStyle = {
  marginTop: "0.5rem",
  padding: "0.6rem",
  textAlign: "center",
  borderRadius: "0.5rem",
  border: "1px solid rgba(0,0,0,0.2)",
  textDecoration: "none",
  color: "black",
  fontSize: "0.8rem",
}

