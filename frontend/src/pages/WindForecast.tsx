import React from 'react';
import { Wind, ArrowUpRight } from 'lucide-react';

const forecasts = [
  { spot: "Cumbuco, CE", wind: "22-28 kts", trend: "up", condition: "Excelente" },
  { spot: "Preá, CE", wind: "25-35 kts", trend: "up", condition: "Épico" },
  { spot: "Taíba, CE", wind: "18-24 kts", trend: "stable", condition: "Bom" },
  { spot: "Icaraizinho, CE", wind: "20-26 kts", trend: "up", condition: "Muito Bom" }
];

const WindForecast = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>
          Radar de <span className="text-gradient">Vento</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Condições em tempo real nos melhores picos do Ceará.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {forecasts.map((f, i) => (
          <div key={i} className="glass-panel" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '4px solid var(--neon-cyan)' }}>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{f.spot}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Condição: {f.condition}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--neon-cyan)' }}>{f.wind}</h3>
              </div>
              <Wind color="var(--neon-cyan)" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WindForecast;
