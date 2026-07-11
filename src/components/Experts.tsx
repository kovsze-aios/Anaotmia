const experts = [
  { name: "Alessio", title: "PT, PhD", initials: "A" },
  { name: "Christina", title: "MD, MSc", initials: "C" },
  { name: "Cinthia", title: "MD", initials: "C" },
  { name: "Claudia", title: "MD", initials: "C" },
  { name: "Danijel", title: "PhD", initials: "D" },
  { name: "Dimitrios", title: "MD, PhD", initials: "D" },
];

export function Experts() {
  return (
    <div className="experts">
      <div className="l-container">
        <h2>Our experts</h2>
        <p>
          Study with confidence: Our team of PhD anatomists, board-certified
          doctors, and university educators delivers rock-solid accuracy—so you
          can trust what you learn and start mastering anatomy.
        </p>
        <div className="experts__team">
          {experts.map((expert) => (
            <div key={expert.name} className="expert">
              <div
                className="img"
                style={{
                  background: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  color: "#999",
                  fontFamily:
                    "var(--font-pluto-medium), Helvetica, Arial, sans-serif",
                }}
              >
                {expert.initials}
              </div>
              <div className="details">
                <div className="name">{expert.name}</div>
                <div className="title">{expert.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
