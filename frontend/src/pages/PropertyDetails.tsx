import { ArrowLeft, Star, Users, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PropertyDetails() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* Hero Image */}
      <div style={{ 
        position: 'relative', 
        height: '300px', 
        background: 'url(https://images.unsplash.com/photo-1596773229713-39f15053ec38?q=80&w=1000&auto=format&fit=crop) center/cover' 
      }}>
        <button 
          onClick={() => navigate(-1)}
          className="glass-panel" 
          style={{ position: 'absolute', top: '20px', left: '20px', padding: '8px', color: '#fff', border: 'none', background: 'rgba(0,0,0,0.5)' }}>
          <ArrowLeft size={24} />
        </button>
        <div className="glass-panel" style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '6px 12px', fontSize: '12px', color: '#fff' }}>
          The Reef House, Cumbuco
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>The Reef House</h1>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Cumbuco, Ceara <Star size={14} color="gold" /> 4.9 (314 reviews)
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>Premium Beachfront Villa</div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="glass-card" style={{ padding: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Dec 14 - Dec 21</div>
            <div className="glass-panel" style={{ padding: '4px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
               <Users size={14}/> 4
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>$1,295</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}> Total</span>
            </div>
            <button className="btn-primary" style={{ background: 'var(--accent-orange)' }}>Book Now</button>
          </div>
        </div>

        {/* Host Section */}
        <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', marginBottom: '24px' }}>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }} alt="Host" />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '18px' }}>Sarah</h3>
              <span className="glass-panel" style={{ color: 'var(--accent-cyan)', fontSize: '10px', padding: '4px 8px', borderColor: 'var(--accent-cyan)' }}>PRO HOST</span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Superhost since 2018 | 4.9 <Star size={10} color="gold" />
            </div>
          </div>
        </div>

        {/* Wind Forecast Widget */}
        <div className="glass-card" style={{ padding: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>WIND FORECAST (Knots)</h3>
            <span style={{ fontSize: '12px', color: 'var(--accent-green)' }}>GOOD KITING WEEK</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '100px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>
             {[18, 16, 20, 20, 20, 22].map((k, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '12%' }}>
                  <span style={{ fontSize: '10px', marginBottom: '4px' }}>{k}</span>
                  <div style={{ 
                    width: '100%', 
                    height: `${(k / 25) * 60}px`, 
                    background: 'linear-gradient(to top, var(--accent-cyan), var(--accent-green))',
                    borderRadius: '4px'
                  }}></div>
                  <span style={{ fontSize: '10px', marginTop: '4px', color: 'var(--text-secondary)' }}>D{14+i}</span>
                </div>
             ))}
          </div>
        </div>

        {/* Equipment Included / Rental */}
        <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>KITESURFING EQUIPMENT INCLUDED</h3>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px' }}>
          
          <div className="glass-card" style={{ minWidth: '180px', padding: '16px' }}>
             <img src="https://s2.glbimg.com/XpQ5Hwz1v0Y73f7m_V70gO5F2zQ=/0x0:1080x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/Y/e/F7NqNRTjKASaEByW6Nxg/3.jpg" alt="Kite" style={{ height: '100px', objectFit: 'contain', margin: '0 auto 16px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
             <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>Duotone Rebel 2024 Kite</h4>
             <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '12px' }}>12m</div>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>$220/wk</span>
                <button className="glass-panel" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => navigate('/equipment/1')}>Upgrade</button>
             </div>
          </div>
          
          <div className="glass-card" style={{ minWidth: '180px', padding: '16px' }}>
             <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={48} color="var(--accent-cyan)" />
             </div>
             <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>North Atmos Carbon Board</h4>
             <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '12px' }}>136cm</div>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>$180/wk</span>
                <button className="glass-panel" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => navigate('/equipment/1')}>Upgrade</button>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
