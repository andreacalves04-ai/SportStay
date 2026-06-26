import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EquipmentRental() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: '100px' }}>
      <header style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)' }}>
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>ADD-ON KITESURF EQUIPMENT</h1>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>(Premium Rental)</div>
        </div>
      </header>

      <div style={{ padding: '0 20px 20px 20px' }}>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', textAlign: 'center' }}>
          Enhance Your Stay at <strong style={{ color: 'var(--accent-cyan)' }}>'THE REEF HOUSE'</strong> - Select premium Duotone & North gear to match your wind.
        </p>

        {/* Duotone Card */}
        <div className="glass-card" style={{ padding: '16px', marginBottom: '20px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-cyan)' }}></div>
          <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>Duotone Kitesurfing</h2>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '12px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://m.media-amazon.com/images/I/61MvJzFj73L._AC_SL1500_.jpg" alt="Duotone" style={{ height: '120px', objectFit: 'contain', mixBlendMode: 'lighten' }} />
          </div>

          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>DUOTONE KITE & BAR</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Duotone Rebel SLS Kite, Trust Bar S/M, Pump
          </p>
          <div style={{ fontSize: '10px', color: 'var(--accent-cyan)', fontWeight: 'bold', marginBottom: '12px' }}>
            PERFORMANCE FREERIDE | Sizes: 8m, 10m, 12m
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>€45</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}> /day</span>
            </div>
            <button className="btn-primary">Select Size & Add</button>
          </div>
        </div>

        {/* North Card */}
        <div className="glass-card" style={{ padding: '16px', marginBottom: '20px', position: 'relative' }}>
          <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>North Kiteboarding</h2>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '12px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ height: '120px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)' }}>
                <CheckCircle size={48} />
            </div>
          </div>

          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>NORTH KITE & BAR</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            North Orbit 2024, Navigator Bar, Pump
          </p>
          <div style={{ fontSize: '10px', color: 'var(--accent-green)', fontWeight: 'bold', marginBottom: '12px' }}>
            BIG AIR BOOST | Sizes: 9m, 11m, 13m
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>€48</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}> /day</span>
            </div>
            <button className="btn-primary" style={{ background: 'var(--accent-green)' }}>Select Size & Add</button>
          </div>
        </div>

      </div>
    </div>
  );
}
