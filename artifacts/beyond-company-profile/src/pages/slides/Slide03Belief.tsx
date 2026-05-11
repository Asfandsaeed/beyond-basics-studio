export default function Slide03Belief() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#F9F9F7', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '8vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#999999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Founding Philosophy
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC' }}>
        03
      </div>
      <div style={{ position: 'absolute', top: '8vh', left: '8vw', width: '2px', height: '100vh', backgroundColor: '#F0F0EE' }} />
      <div style={{ position: 'absolute', top: '25vh', left: '12vw', width: '72vw' }}>
        <div style={{ fontSize: '1.5vw', fontWeight: 400, color: '#FF3C00', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '3vh' }}>
          The Belief
        </div>
        <div style={{ fontSize: '3.2vw', fontWeight: 200, lineHeight: 1.25, letterSpacing: '-0.03em', color: '#111111', textWrap: 'balance' }}>
          "We've streamlined the outdated and layered agency model to give you direct access to the best global talent. No wasted time, no empty promises. Just impactful results."
        </div>
        <div style={{ marginTop: '5vh', display: 'flex', alignItems: 'center', gap: '2vw' }}>
          <div style={{ width: '3vw', height: '1px', backgroundColor: '#111111' }} />
          <div style={{ fontSize: '2vw', fontWeight: 500, color: '#333333', letterSpacing: '0.02em' }}>
            Guillaume Hamon, Founding Partner
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC', letterSpacing: '0.08em' }}>
        03
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#AAAAAA', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        beyondbasics.studio / 2026
      </div>
    </div>
  );
}
