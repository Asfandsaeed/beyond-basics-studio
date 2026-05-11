export default function Slide08DigitalExperience() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#F9F9F7', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '8vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#999999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        03 — Services
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC' }}>
        08
      </div>
      <div style={{ position: 'absolute', top: '22vh', left: '8vw' }}>
        <div style={{ fontSize: '6.2vw', fontWeight: 200, lineHeight: 0.82, letterSpacing: '-0.04em', color: '#DDDDDD', marginLeft: '0.8vw' }}>
          DIGITAL
        </div>
        <div style={{ fontSize: '6.2vw', fontWeight: 900, lineHeight: 0.82, letterSpacing: '-0.05em', color: '#111111' }}>
          EXPERIENCE
        </div>
      </div>
      <div style={{ position: 'absolute', top: '51vh', left: '8vw', width: '34vw' }}>
        <div style={{ fontSize: '2.2vw', fontWeight: 300, color: '#444444', letterSpacing: '-0.01em', fontStyle: 'italic', marginBottom: '3vh' }}>
          Websites that convert and inspire.
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2vh 1.5vw' }}>
          {['UI/UX Design', 'React / Next.js', 'GSAP & Scroll Animation', 'Three.js / WebGL', '3D Visualisation', 'E-commerce', 'Design Systems'].map((cap) => (
            <span key={cap} style={{ fontSize: '1.8vw', fontWeight: 400, color: '#666666' }}>
              {cap}
            </span>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', top: '28vh', right: '8vw', width: '38vw' }}>
        <div style={{ fontSize: '2vw', fontWeight: 400, color: '#333333', lineHeight: 1.6 }}>
          Award-winning digital experiences built from first principles. No templates. No shortcuts. Every pixel placed with intent, every interaction engineered for maximum impact.
        </div>
        <div style={{ marginTop: '3.5vh', width: '3.5vw', height: '2px', backgroundColor: '#FF3C00' }} />
        <div style={{ marginTop: '2.5vh', fontSize: '2vw', fontWeight: 400, color: '#666666', lineHeight: 1.5 }}>
          29× Awwwards. 19× FWA. The numbers reflect a rigorous standard that we hold every project to — regardless of size.
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC', letterSpacing: '0.08em' }}>
        08
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#AAAAAA', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        beyondbasics.studio / 2026
      </div>
    </div>
  );
}
