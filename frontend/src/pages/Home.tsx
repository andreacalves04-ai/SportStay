import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wind, MapPin, Star, ChevronRight, Award, ShieldCheck, Play } from 'lucide-react';

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
  },
  {
    id: 3,
    name: "Mitu Monteiro",
    titles: "Campeão Mundial Wave",
    imageUrl: "/images/mitu.png",
    spot: "Cabo Verde"
  },
  {
    id: 4,
    name: "Mikaili Sol",
    titles: "6x Campeã Mundial",
    imageUrl: "/images/mikaili.png",
    spot: "Taíba, CE"
  },
  {
    id: 5,
    name: "Reno Romeu",
    titles: "Recordista Mundial",
    imageUrl: "/images/reno.png",
    spot: "Rio de Janeiro, RJ"
  },
  {
    id: 6,
    name: "Matchu Lopes",
    titles: "Campeão Mundial Wave",
    imageUrl: "/images/matchu.png",
    spot: "Sal, Cabo Verde"
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
  },
  {
    id: 3,
    name: "Wave Master Lodge",
    host: "Mitu Monteiro",
    location: "Icaraízinho, CE",
    rating: 4.7,
    price: "R$ 550",
    wind: "20-25",
    imageUrl: "/images/villa3.png"
  },
  {
    id: 4,
    name: "Kite Mansion Taíba",
    host: "Mikaili Sol",
    location: "Taíba, CE",
    rating: 5.0,
    price: "R$ 900",
    wind: "25-30",
    imageUrl: "/images/villa4.png"
  },
  {
    id: 5,
    name: "Rio Kite Retreat",
    host: "Reno Romeu",
    location: "Araruama, RJ",
    rating: 4.9,
    price: "R$ 500",
    wind: "18-25",
    imageUrl: "/images/villa5.png"
  },
  {
    id: 6,
    name: "Ponta Preta Lodge",
    host: "Matchu Lopes",
    location: "Ilha do Sal, CV",
    rating: 4.9,
    price: "R$ 750",
    wind: "22-30",
    imageUrl: "/images/villa6.png"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* ========================================== */}
      {/* VISÃO MOBILE (APP STYLE)                     */}
      {/* ========================================== */}
      <div className="mobile-only mobile-view">
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', marginTop: '16px' }}>
          <MapPin color="var(--neon-cyan)" />
          <input 
            type="text" 
            placeholder="Ex: Cumbuco, Preá..." 
            style={{ 
              background: 'transparent', border: 'none', color: 'var(--text-primary)', 
              fontSize: '1rem', width: '100%', outline: 'none' 
            }} 
          />
        </div>

        <div className="section-container">
          <div className="section-header">
            <h3 className="section-title"><Award color="var(--neon-green)" /> Nossos Pro Hosts</h3>
          </div>
          <div className="pro-hosts-list">
            {proHosts.map(host => (
              <div key={host.id} className="pro-host-card glass-panel" onClick={() => navigate(`/host/${host.id}`)}>
                <div className="pro-host-avatar" style={{ backgroundImage: `url(${host.imageUrl})` }}></div>
                <div className="pro-host-info">
                  <h4>{host.name}</h4>
                  <p className="pro-host-title">{host.titles}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-container">
          <div className="section-header">
            <h3 className="section-title">Casas de Campeões</h3>
          </div>
          <div className="properties-list">
            {properties.map(prop => (
              <div key={prop.id} className="property-card glass-panel" onClick={() => navigate(`/property/${prop.id}`)}>
                <div className="property-image" style={{ backgroundImage: `url(${prop.imageUrl})` }}>
                  <div className="wind-badge glass-panel">
                    <Wind size={14} color="var(--neon-cyan)" />
                    <span>{prop.wind} kts</span>
                  </div>
                </div>
                <div className="property-details">
                  <div className="property-header">
                    <div>
                      <h4 className="property-name">{prop.name}</h4>
                      <p className="property-location"><MapPin size={14} /> {prop.location}</p>
                    </div>
                    <div className="property-rating">
                      <Star size={16} color="#fbbf24" fill="#fbbf24" />
                      <span>{prop.rating}</span>
                    </div>
                  </div>
                  <div className="property-footer">
                    <div className="property-price">
                      <span className="price-amount">{prop.price}</span>
                      <span className="price-unit">/ noite</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* VISÃO DESKTOP (LANDING PAGE DE ALTO IMPACTO) */}
      {/* ========================================== */}
      <div className="desktop-only desktop-view">
        
        {/* HERO SECTION */}
        <section className="desktop-hero">
          <div className="desktop-hero-bg"></div>
          <div className="desktop-hero-overlay"></div>
          
          <div className="desktop-hero-content">
            <div className="desktop-hero-badge">
              <ShieldCheck size={20} color="var(--neon-green)" />
              <span>A PRIMEIRA PLATAFORMA EXCLUSIVA DE KITESURF</span>
            </div>
            <h1 className="desktop-hero-title">
              Viva o Lifestyle dos <br />
              <span className="text-gradient">Campeões Mundiais</span>
            </h1>
            <p className="desktop-hero-subtitle">
              Mais do que uma hospedagem, uma imersão. Fique nas casas gerenciadas pelas lendas do esporte, com picos secretos, equipamentos de ponta e vento perfeito.
            </p>
            
            <div className="desktop-hero-actions">
              <button className="btn-neon-primary desktop-btn-large" onClick={() => document.getElementById('destaques-desktop')?.scrollIntoView({ behavior: 'smooth' })}>
                Explorar as Casas
              </button>
              <button className="btn-neon desktop-btn-large">
                <Play size={24} /> Assistir o Manifesto
              </button>
            </div>
          </div>

          <div className="desktop-hero-search glass-panel">
             <div className="d-search-item">
               <label>DESTINO</label>
               <div className="d-search-input">
                 <MapPin color="var(--neon-cyan)" size={20} />
                 <input type="text" placeholder="Onde quer velejar?" />
               </div>
             </div>
             <div className="d-search-divider"></div>
             <div className="d-search-item">
               <label>CONDIÇÕES</label>
               <div className="d-search-input">
                 <Wind color="var(--neon-green)" size={20} />
                 <select>
                   <option>Vento Forte (25+ kts)</option>
                   <option>Vento Médio (15-25 kts)</option>
                   <option>Ondas (Wave)</option>
                   <option>Água Lisa (Flat)</option>
                 </select>
               </div>
             </div>
             <button className="btn-neon-primary d-search-btn">Procurar</button>
          </div>
        </section>

        {/* PRO HOSTS MAG FEATURE */}
        <section className="desktop-pro-hosts" id="destaques-desktop">
          <div className="desktop-section-title-area">
             <h2 className="desktop-h2">Hospede-se com as Lendas</h2>
             <p className="desktop-p">Conheça nossos Pro Hosts: campeões mundiais que abriram as portas de seus paraísos para você.</p>
          </div>

          <div className="desktop-hosts-grid">
            {proHosts.slice(0, 4).map(host => (
              <div 
                key={host.id} 
                className="desktop-host-feature"
                style={{ backgroundImage: `url(${host.imageUrl})` }}
                onClick={() => navigate(`/host/${host.id}`)}
              >
                <div className="desktop-host-overlay">
                  <div className="desktop-host-info">
                    <span className="desktop-host-spot"><MapPin size={16} /> {host.spot}</span>
                    <h3>{host.name}</h3>
                    <p className="text-gradient">{host.titles}</p>
                  </div>
                  <div className="desktop-host-action">
                    <ChevronRight size={32} color="#fff" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROPERTIES MASONRY */}
        <section className="desktop-properties">
          <div className="desktop-section-title-area">
             <h2 className="desktop-h2">Refúgios de Vento</h2>
             <p className="desktop-p">Propriedades premium selecionadas a dedo nos melhores picos do planeta.</p>
          </div>

          <div className="desktop-properties-masonry">
            {properties.map((prop, idx) => (
              <div 
                key={prop.id} 
                className={`desktop-prop-card ${idx === 0 || idx === 3 ? 'large-card' : ''}`}
                onClick={() => navigate(`/property/${prop.id}`)}
              >
                <div className="desktop-prop-image" style={{ backgroundImage: `url(${prop.imageUrl})` }}>
                  <div className="desktop-prop-badges">
                    <div className="wind-badge glass-panel">
                      <Wind size={16} color="var(--neon-cyan)" />
                      <span>{prop.wind} kts</span>
                    </div>
                  </div>
                </div>
                <div className="desktop-prop-content glass-panel">
                  <div className="dp-header">
                    <h3>{prop.name}</h3>
                    <div className="dp-rating"><Star size={18} color="#fbbf24" fill="#fbbf24"/> {prop.rating}</div>
                  </div>
                  <p className="dp-location"><MapPin size={16}/> {prop.location} • Host: {prop.host.split(' ')[0]}</p>
                  <div className="dp-footer">
                    <span className="dp-price">{prop.price} <span>/ noite</span></span>
                    <button className="btn-neon-primary">Reservar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
