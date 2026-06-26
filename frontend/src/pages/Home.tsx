import { Search, Wind, Waves, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 'bold', fontFamily: 'system-ui' }}>
          <span style={{ color: 'var(--accent-cyan)' }}>SPORT</span>STAY
        </h1>
      </header>

      {/* Search Bar */}
      <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <MapPin color="var(--accent-green)" size={24} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Search Spots, Wind...</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>e.g., Cumbuco, Ceara | Current Wind</div>
        </div>
        <Search color="var(--accent-cyan)" size={24} />
      </div>

      {/* Current Wind Status */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <div className="glass-panel" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', borderColor: 'var(--accent-green)' }}>
          <Wind color="var(--accent-green)" size={16} />
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Wind: 22 kts SE</span>
          <span style={{ margin: '0 8px', color: 'var(--text-secondary)' }}>|</span>
          <Waves color="var(--accent-cyan)" size={16} />
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Waves: 1.5m</span>
        </div>
      </div>

      {/* Spots List */}
      <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Premium Spots</h2>
      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px' }}>
        
        {/* Card 1 */}
        <div className="glass-card" onClick={() => navigate('/property/1')} style={{ minWidth: '280px', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: 'url(https://images.unsplash.com/photo-1596773229713-39f15053ec38?q=80&w=1000&auto=format&fit=crop) center/cover' }}></div>
          <div style={{ padding: '16px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>The Reef House</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              <MapPin size={12} /> Cumbuco, Ceara | <Star size={12} color="gold" /> 4.9 (314 reviews)
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div><strong style={{ color: 'var(--accent-green)', fontSize: '18px' }}>$185</strong> / night</div>
              <div className="glass-panel" style={{ padding: '4px 8px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Wind size={10} /> 22 kts
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-card" style={{ minWidth: '280px', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: 'url(https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop) center/cover' }}></div>
          <div style={{ padding: '16px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Kite Beach Lodge</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              <MapPin size={12} /> Preá, Ceara | <Star size={12} color="gold" /> 4.8 (120 reviews)
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div><strong style={{ color: 'var(--accent-green)', fontSize: '18px' }}>$210</strong> / night</div>
              <div className="glass-panel" style={{ padding: '4px 8px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Wind size={10} /> 25 kts
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Destinations */}
      <h2 style={{ fontSize: '20px', marginBottom: '16px', marginTop: '16px' }}>Explore Destinations</h2>
      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '20px' }}>
        <button className="glass-panel" style={{ background: 'transparent', padding: '8px 16px', color: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)' }}>Cumbuco</button>
        <button className="glass-panel" style={{ background: 'transparent', padding: '8px 16px', color: 'var(--text-primary)' }}>Preá</button>
        <button className="glass-panel" style={{ background: 'transparent', padding: '8px 16px', color: 'var(--text-primary)' }}>Jericoacoara</button>
      </div>
    </div>
  );
}
