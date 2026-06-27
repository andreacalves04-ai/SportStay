import React from 'react';
import { Waves, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const rentals = [
  {
    id: 1,
    name: "Duotone Evo D/LAB 2024",
    type: "Kite Freeride/Big Air",
    rating: 5.0,
    price: "R$ 450/dia",
    imageUrl: "/images/gear.png"
  },
  {
    id: 2,
    name: "Prancha Twintip Core Choice 5",
    type: "Board Freestyle",
    rating: 4.9,
    price: "R$ 180/dia",
    imageUrl: "/images/gear.png"
  },
  {
    id: 3,
    name: "North Orbit 2024 (9m)",
    type: "Kite Big Air",
    rating: 4.8,
    price: "R$ 400/dia",
    imageUrl: "/images/gear.png"
  },
  {
    id: 4,
    name: "Ozone Edge V11 (10m)",
    type: "Kite Racing/Freeride",
    rating: 4.7,
    price: "R$ 380/dia",
    imageUrl: "/images/gear.png"
  },
  {
    id: 5,
    name: "Prancha Direcional Duotone Wam",
    type: "Board Surf/Wave",
    rating: 4.9,
    price: "R$ 220/dia",
    imageUrl: "/images/gear.png"
  },
  {
    id: 6,
    name: "Trapézio Mystic Majestic X",
    type: "Harness Hardshell",
    rating: 5.0,
    price: "R$ 100/dia",
    imageUrl: "/images/gear.png"
  }
];

const Rentals = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>
          Aluguel de <span className="text-gradient">Equipamento</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Kites, pranchas e trapézios das melhores marcas.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {rentals.map(rental => (
          <div key={rental.id} className="glass-panel" style={{ overflow: 'hidden', display: 'flex' }}>
            <div style={{ 
              width: '120px', 
              backgroundImage: `url(${rental.imageUrl})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}></div>
            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{rental.name}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{rental.type}</p>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px' }}>
                <span style={{ fontWeight: 700 }}>A partir de {rental.price}</span>
                <button 
                  onClick={() => navigate('/property/1/equipment')}
                  className="btn-neon-primary" 
                  style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                >
                  Ver Itens
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rentals;
