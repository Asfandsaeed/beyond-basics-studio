export default function Slide01Cover() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0A0A0A', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '8vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#888888', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        Company Profile
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#555555', letterSpacing: '0.08em' }}>
        2026
      </div>
      <div style={{ position: 'absolute', top: '16vh', left: '8vw', width: '5vw', height: '2px', backgroundColor: '#FF3C00' }} />
      <div style={{ position: 'absolute', bottom: '16vh', left: '8vw' }}>
        <div style={{ fontSize: '12vw', fontWeight: 200, lineHeight: 0.82, letterSpacing: '-0.04em', color: '#3A3A3A', marginLeft: '1.5vw' }}>
          CREATIVE
        </div>
        <div style={{ fontSize: '12vw', fontWeight: 900, lineHeight: 0.82, letterSpacing: '-0.05em', color: '#FFFFFF' }}>
          BEYOND<span style={{ color: '#FF3C00' }}>®</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '8.5vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#666666', fontStyle: 'italic', letterSpacing: '0.01em' }}>
        "Tomorrow's brands, today."™
      </div>
      <div style={{ position: 'absolute', bottom: '8.5vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#555555', letterSpacing: '0.06em' }}>
        beyondbasics.studio
      </div>
    </div>
  );
}
