import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Wind, Navigation, User, Search, MapPin, BookOpen, Waves } from 'lucide-react';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import EquipmentRental from './pages/EquipmentRental';
import Lessons from './pages/Lessons';
import Rentals from './pages/Rentals';
import WindForecast from './pages/WindForecast';
import Profile from './pages/Profile';

// Layout Component
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-container">
      {/* Top Navbar */}
      <nav className="glass-panel" style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, 
        padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderRadius: '0', borderTop: 'none', borderLeft: 'none', borderRight: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Navigation color="var(--neon-cyan)" size={28} style={{ transform: 'rotate(45deg)' }} />
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
              SPORT<span style={{ color: 'var(--neon-cyan)' }}>STAY</span>
            </h1>
          </div>
          {/* Desktop Navigation Links */}
          <div className="desktop-only" style={{ gap: '24px', marginLeft: '24px' }}>
            <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Explorar</Link>
            <Link to="/lessons" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Aulas</Link>
            <Link to="/rentals" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Aluguel</Link>
            <Link to="/wind" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Vento</Link>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" className="mobile-only" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Search size={20} />
            <span style={{ display: 'none' }}>Buscar</span>
          </Link>
          <Link to="/profile" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)', textDecoration: 'none' }}>
            <User size={20} color="var(--text-secondary)" />
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ paddingTop: '80px', paddingBottom: '80px', minHeight: '100vh' }}>
        {children}
      </main>

      {/* Bottom Tab Bar (Mobile App Feel) */}
      <div className="glass-panel mobile-only" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-around', padding: '12px 0',
        borderRadius: '24px 24px 0 0', borderBottom: 'none', borderLeft: 'none', borderRight: 'none',
        background: 'rgba(10, 15, 36, 0.85)'
      }}>
        <BottomNav />
      </div>
    </div>
  );
};

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: path === '/' ? 'var(--neon-cyan)' : 'var(--text-secondary)' }}>
        <Search size={24} />
        <span style={{ fontSize: '0.75rem', fontWeight: path === '/' ? 600 : 400 }}>Explorar</span>
      </Link>
      <Link to="/lessons" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: path === '/lessons' ? 'var(--neon-cyan)' : 'var(--text-secondary)' }}>
        <BookOpen size={24} />
        <span style={{ fontSize: '0.75rem', fontWeight: path === '/lessons' ? 600 : 400 }}>Aulas</span>
      </Link>
      <Link to="/rentals" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: path === '/rentals' ? 'var(--neon-cyan)' : 'var(--text-secondary)' }}>
        <Waves size={24} />
        <span style={{ fontSize: '0.75rem', fontWeight: path === '/rentals' ? 600 : 400 }}>Aluguel</span>
      </Link>
      <Link to="/wind" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: path === '/wind' ? 'var(--neon-cyan)' : 'var(--text-secondary)' }}>
        <Wind size={24} />
        <span style={{ fontSize: '0.75rem', fontWeight: path === '/wind' ? 600 : 400 }}>Vento</span>
      </Link>
      <Link to="/profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: path === '/profile' ? 'var(--neon-cyan)' : 'var(--text-secondary)' }}>
        <User size={24} />
        <span style={{ fontSize: '0.75rem', fontWeight: path === '/profile' ? 600 : 400 }}>Perfil</span>
      </Link>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/property/:id/equipment" element={<EquipmentRental />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/wind" element={<WindForecast />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
