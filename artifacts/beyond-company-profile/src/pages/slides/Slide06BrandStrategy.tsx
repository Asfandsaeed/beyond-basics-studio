export default function Slide06BrandStrategy() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#F9F9F7', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '8vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#999999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        01 — Services
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC' }}>
        06
      </div>
      <div style={{ position: 'absolute', top: '22vh', left: '8vw' }}>
        <div style={{ fontSize: '7vw', fontWeight: 200, lineHeight: 0.82, letterSpacing: '-0.04em', color: '#DDDDDD', marginLeft: '0.8vw' }}>
          BRAND
        </div>
        <div style={{ fontSize: '7vw', fontWeight: 900, lineHeight: 0.82, letterSpacing: '-0.05em', color: '#111111' }}>
          STRATEGY
        </div>
      </div>
      <div style={{ position: 'absolute', top: '51vh', left: '8vw', width: '34vw' }}>
        <div style={{ fontSize: '2.2vw', fontWeight: 300, color: '#444444', letterSpacing: '-0.01em', fontStyle: 'italic', marginBottom: '3vh' }}>
          Clarity before creation.
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2vh 1.5vw' }}>
          {['Positioning', 'Naming', 'Brand Architecture', 'Messaging Framework', 'Tone of Voice', 'Audience Research', 'Competitive Analysis', 'Brand Narrative'].map((cap) => (
            <span key={cap} style={{ fontSize: '1.8vw', fontWeight: 400, color: '#666666' }}>
              {cap}
            </span>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', top: '28vh', right: '8vw', width: '38vw' }}>
        <div style={{ fontSize: '2vw', fontWeight: 400, color: '#333333', lineHeight: 1.6 }}>
          We begin where most agencies stop — with the uncomfortable questions. Who are you, really? Why does your brand deserve attention in a world drowning in sameness?
        </div>
        <div style={{ marginTop: '3.5vh', width: '3.5vw', height: '2px', backgroundColor: '#FF3C00' }} />
        <div style={{ marginTop: '2.5vh', fontSize: '2vw', fontWeight: 400, color: '#666666', lineHeight: 1.5 }}>
          The outcome: a north star your entire organisation can orient around — from product to sales to social.
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC', letterSpacing: '0.08em' }}>
        06
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#AAAAAA', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        beyondbasics.studio / 2026
      </div>
    </div>
  );
}
