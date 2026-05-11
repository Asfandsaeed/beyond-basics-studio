export default function Slide02WhoWeAre() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#F9F9F7', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '8vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#999999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        About
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC', letterSpacing: '0.06em' }}>
        02
      </div>
      <div style={{ position: 'absolute', top: '22vh', left: '8vw' }}>
        <div style={{ fontSize: '11vw', fontWeight: 200, lineHeight: 0.82, letterSpacing: '-0.04em', color: '#CCCCCC', marginLeft: '1vw' }}>
          WHO
        </div>
        <div style={{ fontSize: '11vw', fontWeight: 900, lineHeight: 0.82, letterSpacing: '-0.05em', color: '#111111' }}>
          WE ARE
        </div>
      </div>
      <div style={{ position: 'absolute', top: '30vh', left: '56vw', width: '38vw' }}>
        <div style={{ fontSize: '2vw', fontWeight: 400, color: '#333333', lineHeight: 1.55, textWrap: 'pretty' }}>
          Beyond® is a deliberately lean collective of senior creatives, strategists, growth marketers, and technologists.
        </div>
        <div style={{ marginTop: '3vh', fontSize: '2vw', fontWeight: 400, color: '#333333', lineHeight: 1.55 }}>
          One founding partner. Direct access. No account layers. No junior work.
        </div>
        <div style={{ marginTop: '4vh', width: '4vw', height: '2px', backgroundColor: '#FF3C00' }} />
        <div style={{ marginTop: '2.5vh', fontSize: '2vw', fontWeight: 700, color: '#111111', letterSpacing: '-0.01em' }}>
          Guillaume Hamon
        </div>
        <div style={{ marginTop: '0.5vh', fontSize: '1.8vw', fontWeight: 400, color: '#888888' }}>
          Founding Partner
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC', letterSpacing: '0.08em' }}>
        02
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#AAAAAA', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        beyondbasics.studio / 2026
      </div>
    </div>
  );
}
