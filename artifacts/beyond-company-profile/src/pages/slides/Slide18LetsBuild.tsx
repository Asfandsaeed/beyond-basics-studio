export default function Slide18LetsBuild() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#0A0A0A', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '8vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#555555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Let&apos;s Talk
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#444444' }}>
        18
      </div>
      <div style={{ position: 'absolute', top: '16vh', left: '8vw', width: '5vw', height: '2px', backgroundColor: '#FF3C00' }} />
      <div style={{ position: 'absolute', bottom: '22vh', left: '8vw' }}>
        <div style={{ fontSize: '12vw', fontWeight: 200, lineHeight: 0.82, letterSpacing: '-0.04em', color: '#2A2A2A', marginLeft: '1.5vw' }}>
          LET&apos;S
        </div>
        <div style={{ fontSize: '12vw', fontWeight: 900, lineHeight: 0.82, letterSpacing: '-0.05em', color: '#FFFFFF' }}>
          BUILD<span style={{ color: '#FF3C00' }}>.</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '8.5vh', left: '8vw', display: 'flex', gap: '6vw' }}>
        <div>
          <div style={{ fontSize: '1.5vw', fontWeight: 500, color: '#777777', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8vh' }}>
            New Business
          </div>
          <div style={{ fontSize: '2vw', fontWeight: 400, color: '#CCCCCC' }}>
            hello@beyondbasics.studio
          </div>
        </div>
        <div>
          <div style={{ fontSize: '1.5vw', fontWeight: 500, color: '#777777', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8vh' }}>
            Press
          </div>
          <div style={{ fontSize: '2vw', fontWeight: 400, color: '#CCCCCC' }}>
            press@beyondbasics.studio
          </div>
        </div>
        <div>
          <div style={{ fontSize: '1.5vw', fontWeight: 500, color: '#777777', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8vh' }}>
            Careers
          </div>
          <div style={{ fontSize: '2vw', fontWeight: 400, color: '#CCCCCC' }}>
            jobs@beyondbasics.studio
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#555555', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        beyondbasics.studio / 2026
      </div>
    </div>
  );
}
