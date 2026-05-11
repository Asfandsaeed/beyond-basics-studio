export default function Slide09GrowthContent() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#F9F9F7', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '8vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#999999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        04–05 — Services
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC' }}>
        09
      </div>
      <div style={{ position: 'absolute', top: '22vh', left: '8vw' }}>
        <div style={{ fontSize: '7vw', fontWeight: 200, lineHeight: 0.82, letterSpacing: '-0.04em', color: '#DDDDDD', marginLeft: '0.8vw' }}>
          GROWTH &
        </div>
        <div style={{ fontSize: '7vw', fontWeight: 900, lineHeight: 0.82, letterSpacing: '-0.05em', color: '#111111' }}>
          CONTENT
        </div>
      </div>
      <div style={{ position: 'absolute', top: '50vh', left: '8vw', width: '34vw' }}>
        <div style={{ fontSize: '2.2vw', fontWeight: 300, color: '#444444', letterSpacing: '-0.01em', fontStyle: 'italic', marginBottom: '3vh' }}>
          Brand-led growth that compounds.
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2vh 1.5vw' }}>
          {['Growth Strategy', 'Paid Creative', 'Meta · Google · LinkedIn · TikTok', 'SEO', 'Email & Lifecycle', 'CRO', 'Photography', 'Video Production', 'CGI'].map((cap) => (
            <span key={cap} style={{ fontSize: '1.8vw', fontWeight: 400, color: '#666666' }}>
              {cap}
            </span>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', top: '28vh', right: '8vw', width: '38vw' }}>
        <div style={{ fontSize: '2vw', fontWeight: 400, color: '#333333', lineHeight: 1.6 }}>
          Growth without brand is noise. We fuse performance marketing with creative excellence so every campaign builds equity while it drives revenue.
        </div>
        <div style={{ marginTop: '3.5vh', width: '3.5vw', height: '2px', backgroundColor: '#FF3C00' }} />
        <div style={{ marginTop: '2.5vh', fontSize: '2vw', fontWeight: 400, color: '#666666', lineHeight: 1.5 }}>
          From content strategy to CGI production — we create assets that perform on every channel without diluting the brand we've built.
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', left: '8vw', fontSize: '1.5vw', fontWeight: 400, color: '#CCCCCC', letterSpacing: '0.08em' }}>
        09
      </div>
      <div style={{ position: 'absolute', bottom: '6vh', right: '6vw', fontSize: '1.5vw', fontWeight: 400, color: '#AAAAAA', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        beyondbasics.studio / 2026
      </div>
    </div>
  );
}
