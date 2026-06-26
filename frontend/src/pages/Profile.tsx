import React from 'react';
import { User, Settings, Bell, CreditCard, HelpCircle, LogOut } from 'lucide-react';

const Profile = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <User size={40} color="var(--bg-darker)" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>João Kiter</h2>
          <p style={{ color: 'var(--text-secondary)' }}>joao@kitesurf.com</p>
        </div>
      </div>

      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--glass-border)' }}>
          <Settings size={20} color="var(--text-secondary)" />
          <span style={{ fontWeight: 500 }}>Configurações de Conta</span>
        </div>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--glass-border)' }}>
          <Bell size={20} color="var(--text-secondary)" />
          <span style={{ fontWeight: 500 }}>Notificações & Alertas de Vento</span>
        </div>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--glass-border)' }}>
          <CreditCard size={20} color="var(--text-secondary)" />
          <span style={{ fontWeight: 500 }}>Pagamentos</span>
        </div>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--glass-border)' }}>
          <HelpCircle size={20} color="var(--text-secondary)" />
          <span style={{ fontWeight: 500 }}>Suporte ao Kitesurfista</span>
        </div>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', color: '#ef4444' }}>
          <LogOut size={20} />
          <span style={{ fontWeight: 500 }}>Sair</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
