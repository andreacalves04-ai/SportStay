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
    <div className="home-container">
      {/* High-Impact Hero Section (Desktop Landing Page) */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Award size={16} color="var(--neon-green)" />
            <span>A Primeira Plataforma de Lendas do Kitesurf</span>
          </div>
          <h1 className="hero-title">
            Hospede-se com <br />
            <span className="text-gradient">Campeões Mundiais</span>
          </h1>
          <p className="hero-subtitle">
            Não reserve apenas uma casa. Viva a rotina, os treinos e o lifestyle dos melhores atletas de kitesurf do mundo no paraíso dos ventos.
          </p>
          
          <div className="hero-actions">
            <button className="btn-neon-primary hero-btn" onClick={() => document.getElementById('destaques')?.scrollIntoView({ behavior: 'smooth' })}>
              Explorar Experiências
            </button>
            <button className="btn-neon hero-btn">
              <Play size={20} /> Ver o Filme
            </button>
          </div>

          {/* Desktop Search Bar (Overlay on Hero) */}
          <div className="hero-search glass-panel desktop-only">
            <div className="search-field">
              <MapPin color="var(--neon-cyan)" />
              <div>
                <label>Onde?</label>
                <input type="text" placeholder="Ex: Cumbuco, CE" />
              </div>
            </div>
            <div className="search-divider"></div>
            <div className="search-field">
              <Wind color="var(--neon-green)" />
              <div>
                <label>Vento Ideal</label>
                <input type="text" placeholder="20-30 kts" />
              </div>
            </div>
            <button className="btn-neon-primary search-btn">Buscar</button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="home-main-content" id="destaques">
        
        {/* Mobile Search Bar (Only visible on mobile) */}
        <div className="glass-panel mobile-only" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <MapPin color="var(--neon-cyan)" />
          <input 
            type="text" 
            placeholder="Ex: Cumbuco, Preá..." 
            style={{ 
              background: 'transparent', border: 'none', color: 'var(--text-primary)', 
              fontSize: '1rem', width: '100%', outline: 'none' 
            }} 
          />
          <div style={{ background: 'var(--glass-border)', width: '1px', height: '24px' }}></div>
          <Wind color="var(--neon-green)" />
        </div>

        {/* Pro Hosts Highlights (The Differential) */}
        <div className="section-container">
          <div className="section-header">
            <h3 className="section-title">
              <Award color="var(--neon-green)" /> Nossos Pro Hosts
            </h3>
            <p className="section-description desktop-only">Conheça as Lendas do Esporte que gerenciam as nossas melhores casas.</p>
          </div>
          
          <div className="pro-hosts-list">
            {proHosts.map(host => (
              <div 
                key={host.id} 
                className="pro-host-card glass-panel"
                onClick={() => navigate(`/host/${host.id}`)}
              >
                <div className="pro-host-avatar" style={{ backgroundImage: `url(${host.imageUrl})` }}></div>
                <div className="pro-host-info">
                  <h4>{host.name}</h4>
                  <p className="pro-host-title">{host.titles}</p>
                  <p className="pro-host-spot"><MapPin size={12} /> {host.spot}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Spots */}
        <div className="section-container" style={{ marginTop: '48px' }}>
          <div className="section-header">
            <h3 className="section-title">Casas de Campeões</h3>
            <span className="see-all">
              Ver todas <ChevronRight size={16} />
            </span>
          </div>

          <div className="properties-list">
            {properties.map(prop => (
              <div 
                key={prop.id} 
                className="property-card glass-panel"
                onClick={() => navigate(`/property/${prop.id}`)}
              >
                <div className="property-image" style={{ backgroundImage: `url(${prop.imageUrl})` }}>
                  <div className="wind-badge glass-panel">
                    <Wind size={14} color="var(--neon-cyan)" />
                    <span>{prop.wind} kts</span>
                  </div>

                  <div className="host-badge glass-panel">
                    <ShieldCheck size={16} color="var(--neon-green)" />
                    <span>Host: {prop.host.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="property-details">
                  <div className="property-header">
                    <div>
                      <h4 className="property-name">{prop.name}</h4>
                      <p className="property-location">
                        <MapPin size={14} /> {prop.location}
                      </p>
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
                    <button className="btn-neon-primary book-btn" onClick={(e) => { e.stopPropagation(); navigate(`/property/${prop.id}`); }}>
                      Ver Casa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
