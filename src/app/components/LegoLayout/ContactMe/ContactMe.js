import SendMailButton from '../../UI/Buttons/SendMailButton'
import Hero from '../../UI/Hero/Hero'

export default function ContactMe({ className }) {
  return (
    <Hero
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "0.75rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <strong style={{ fontSize: "1rem" }}>Contact</strong>
        <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>
          Let’s work together or talk.
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <ContactRow label="Email" value="bernardusoren123@gmail.com" />
        <ContactRow label="GitHub" value="github.com/orenkeorenan" />
        <ContactRow label="LinkedIn" value="linkedin.com/in/oren-bernardus" />
        <ContactRow label="Location" value="Busan, South Korea" />
      </div>

      <SendMailButton />
    </Hero>
  )
}

function ContactRow({ label, value }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "70px 1fr",
        fontSize: "0.8rem",
        gap: "0.5rem",
      }}
    >
      <span style={{ opacity: 0.5 }}>{label}</span>
      <span style={{ fontWeight: 500 }}>{value}</span>
    </div>
  )
}
