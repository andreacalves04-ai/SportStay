import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Plus, Minus, Waves, Check } from 'lucide-react';

const equipmentList = [
  {
    id: 'k1',
    category: 'Kite',
    brand: 'Duotone',
    model: 'Evo D/LAB 2024 (12m)',
    price: 300,
    imageUrl: 'https://images.unsplash.com/photo-1537554900735-3ce33a1e28ef?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'k2',
    category: 'Kite',
    brand: 'North',
    model: 'Orbit 2024 (9m)',
    price: 250,
    imageUrl: 'https://images.unsplash.com/photo-1529175200257-2e11d619934c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b1',
    category: 'Board',
    brand: 'Core',
    model: 'Choice 5 Twintip (137cm)',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1516084930364-84c1ccaf7957?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b2',
    category: 'Board',
    brand: 'Duotone',
    model: 'Wam Direcional (5\'9")',
    price: 180,
    imageUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'h1',
    category: 'Harness',
    brand: 'Mystic',
    model: 'Majestic X Hardshell (M)',
    price: 90,
    imageUrl: 'https://images.unsplash.com/photo-1526365926522-86dff77636de?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'h2',
    category: 'Harness',
    brand: 'Ride Engine',
    model: 'Saber V3 (L)',
    price: 110,
    imageUrl: 'https://images.unsplash.com/photo-1563720718507-1607f2a1586a?q=80&w=800&auto=format&fit=crop'
  }
];

const EquipmentRental = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Record<string, number>>({});

  const handleSelect = (id: string, action: 'add' | 'remove') => {
    setSelected(prev => {
      const current = prev[id] || 0;
      if (action === 'add') return { ...prev, [id]: current + 1 };
      if (action === 'remove' && current > 0) return { ...prev, [id]: current - 1 };
      return prev;
    });
  };

  const total = equipmentList.reduce((acc, eq) => acc + (eq.price * (selected[eq.id] || 0)), 0);

  return (
    <div style={{ padding: '20px', paddingBottom: '120px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px' }}>
        <div 
          onClick={() => navigate(-1)}
          className="glass-panel"
          style={{ padding: '10px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ChevronLeft color="var(--text-primary)" size={24} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Aluguel de Quiver</h2>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          Adicione equipamentos de alta performance à sua reserva na The Reef House.
        </p>
      </div>

      {/* Equipment List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {equipmentList.map(eq => (
          <div key={eq.id} className="glass-panel" style={{ display: 'flex', overflow: 'hidden' }}>
            <div style={{ 
              width: '120px', 
              backgroundImage: `url(${eq.imageUrl})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}></div>
            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {eq.category} • {eq.brand}
                </span>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginTop: '4px' }}>{eq.model}</h4>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px' }}>
                <span style={{ fontWeight: 700 }}>R$ {eq.price}<span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/dia</span></span>
                
                {/* Quantity Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button 
                    onClick={() => handleSelect(eq.id, 'remove')}
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', cursor: 'pointer' }}
                  >
                    <Minus size={16} />
                  </button>
                  <span style={{ fontWeight: 600, width: '12px', textAlign: 'center' }}>
                    {selected[eq.id] || 0}
                  </span>
                  <button 
                    onClick={() => handleSelect(eq.id, 'add')}
                    style={{ background: 'var(--neon-cyan)', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-darker)', cursor: 'pointer' }}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action */}
      {total > 0 && (
        <div style={{ 
          position: 'fixed', bottom: '80px', left: '20px', right: '20px', zIndex: 100,
          background: 'var(--neon-green)', color: 'var(--bg-darker)', borderRadius: '16px',
          padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          boxShadow: '0 10px 25px var(--neon-green-glow)'
        }}>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Total Adicional</p>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>+ R$ {total} <span style={{ fontSize: '0.875rem', fontWeight: 400 }}>/dia</span></h3>
          </div>
          <button style={{ 
            background: 'var(--bg-darker)', color: 'var(--neon-green)', border: 'none',
            padding: '10px 20px', borderRadius: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <Check size={18} /> Confirmar
          </button>
        </div>
      )}

    </div>
  );
};

export default EquipmentRental;
