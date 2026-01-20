import SendMailButton from '../../UI/Buttons/SendMailButton'
import Hero from '../../UI/Hero/Hero'
import H1 from '../../UI/Typography/H1'
import H2 from '../../UI/Typography/H2'
import H3 from '../../UI/Typography/H3'
import P from '../../UI/Typography/P'

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
        <H1>
          <strong>Contact</strong>
        </H1>
          
        <H2 style={{ fontSize: "0.8rem", opacity: 0.7 }}>
          Let’s work together or talk.
        </H2>
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
        gridTemplateColumns: "90px 1fr",
        gap: "0.5rem",
      }}
    >
      <P 
        style={{ 
          opacity: 0.5 ,
          fontSize:"clamp(1rem, 0.95rem + 0.4vw, 1.3rem)" 
        }}
      >
        {label}
      </P>
      <P 
        style={{ 
          fontWeight: 500, 
          fontSize:"clamp(1rem, 0.95rem + 0.4vw, 1.3rem)" 
        }}
      >
        : {value}
      </P>
    </div>
  )
}
