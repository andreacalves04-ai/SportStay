import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home, Compass, Calendar, User } from 'lucide-react';
import HomePage from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import EquipmentRental from './pages/EquipmentRental';

const BottomTab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <div className="bottom-tab-bar">
      <div className={`tab-item ${isActive('/')}`} onClick={() => navigate('/')}>
        <Home size={24} />
        <span>Home</span>
      </div>
      <div className={`tab-item ${isActive('/explore')}`} onClick={() => navigate('/explore')}>
        <Compass size={24} />
        <span>Explore</span>
      </div>
      <div className={`tab-item ${isActive('/bookings')}`} onClick={() => navigate('/bookings')}>
        <Calendar size={24} />
        <span>Bookings</span>
      </div>
      <div className={`tab-item ${isActive('/profile')}`} onClick={() => navigate('/profile')}>
        <User size={24} />
        <span>Profile</span>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/equipment/:id" element={<EquipmentRental />} />
        </Routes>
        <BottomTab />
      </div>
    </BrowserRouter>
  );
}

export default App;
