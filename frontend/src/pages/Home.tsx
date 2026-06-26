import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wind, MapPin, Star, ChevronRight, Award, ShieldCheck } from 'lucide-react';

const proHosts = [
  {
    id: 1,
    name: "Carlos Mario 'Bebê'",
    titles: "4x Campeão Mundial",
    imageUrl: "/images/carlos.png",
    spot: "Cauípe, CE"
  },
  {
    id: 2,
    name: "Bruna Kajiya",
    titles: "3x Campeã Mundial",
    imageUrl: "/images/bruna.png",
    spot: "Preá, CE"
  }
];

const properties = [
  {
    id: 1,
    name: "The Reef House",
    host: "Carlos Mario (Pro Rider)",
    location: "Cumbuco, CE",
    rating: 4.9,
    price: "R$ 450",
    wind: "22-28",
    imageUrl: "/images/villa1.png"
  },
  {
    id: 2,
    name: "Wind Riders Villa",
    host: "Bruna Kajiya (Pro Rider)",
    location: "Preá, CE",
    rating: 4.8,
    price: "R$ 600",
    wind: "25-35",
    imageUrl: "/images/villa2.png"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* Search Header */}
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.2 }}>
          Hospede-se com <br/><span className="text-gradient">Lendas do Esporte</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Viva a rotina de um atleta profissional. Casas exclusivas gerenciadas por campeões mundiais.
        </p>
      </div>

      {/* Search Bar */}
      <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <MapPin color="var(--neon-cyan)" />
        <input 
          type="text" 
          placeholder="Ex: Cumbuco, Preá, Gostoso..." 
          style={{ 
            background: 'transparent', border: 'none', color: 'var(--text-primary)', 
            fontSize: '1rem', width: '100%', outline: 'none' 
          }} 
        />
        <div style={{ background: 'var(--glass-border)', width: '1px', height: '24px' }}></div>
        <Wind color="var(--neon-green)" />
      </div>

      {/* Pro Hosts Highlights (The Differential) */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award color="var(--neon-green)" /> Pro Hosts em Destaque
          </h3>
        </div>
        
        <div className="pro-hosts-list" style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px', WebkitOverflowScrolling: 'touch' }}>
          {proHosts.map(host => (
            <div key={host.id} style={{ minWidth: '160px', flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '100px', height: '100px', borderRadius: '50%', 
                backgroundImage: `url(${host.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center',
                border: '3px solid var(--neon-green)', boxShadow: '0 0 15px rgba(57, 255, 20, 0.3)'
              }}></div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{host.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontWeight: 600 }}>{host.titles}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{host.spot}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Spots */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Casas de Campeões</h3>
          <span style={{ color: 'var(--neon-cyan)', fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>
            Ver todos <ChevronRight size={16} />
          </span>
        </div>

        <div className="properties-list">
          {properties.map(prop => (
            <div 
              key={prop.id} 
              className="glass-panel"
              onClick={() => navigate(`/property/${prop.id}`)}
              style={{ 
                overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s ease', border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ 
                aspectRatio: '4/3',
                backgroundImage: `url(${prop.imageUrl})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div className="glass-panel" style={{ 
                  position: 'absolute', top: '12px', right: '12px', padding: '6px 12px', 
                  display: 'flex', alignItems: 'center', gap: '6px', borderRadius: '20px',
                  background: 'rgba(0,0,0,0.5)', border: '1px solid var(--neon-cyan)'
                }}>
                  <Wind size={14} color="var(--neon-cyan)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{prop.wind} kts</span>
                </div>

                {/* Pro Host Badge Overlay */}
                <div style={{
                  position: 'absolute', bottom: '12px', left: '12px', 
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(10, 15, 36, 0.8)', padding: '6px 12px', borderRadius: '20px',
                  backdropFilter: 'blur(4px)', border: '1px solid var(--neon-green)'
                }}>
                  <ShieldCheck size={16} color="var(--neon-green)" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Host: {prop.host}</span>
                </div>
              </div>

              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>{prop.name}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} /> {prop.location}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={16} color="#fbbf24" fill="#fbbf24" />
                    <span style={{ fontWeight: 600 }}>{prop.rating}</span>
                  </div>
                </div>
                
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{prop.price}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}> / noite</span>
                  </div>
                  <button className="btn-neon-primary" style={{ padding: '8px 20px', fontSize: '0.875rem', fontWeight: 700 }}>
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
