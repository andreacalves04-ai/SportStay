import React from 'react';
import { BookOpen, Star, ChevronRight } from 'lucide-react';
const lessons = [
  {
    id: 1,
    name: "Cumbuco Kite School",
    type: "Iniciante ao Avançado",
    rating: 4.9,
    price: "R$ 200/h",
    imageUrl: "/images/school.png"
  },
  {
    id: 2,
    name: "Preá Wind Center",
    type: "Foil & Strapless",
    rating: 4.8,
    price: "R$ 250/h",
    imageUrl: "/images/school.png"
  },
  {
    id: 3,
    name: "Taíba Freestyle Academy",
    type: "Freestyle PRO",
    rating: 5.0,
    price: "R$ 300/h",
    imageUrl: "/images/school.png"
  },
  {
    id: 4,
    name: "Icaraí Wave Club",
    type: "Wave Riding",
    rating: 4.7,
    price: "R$ 220/h",
    imageUrl: "/images/school.png"
  },
  {
    id: 5,
    name: "Sal Island Surf & Kite",
    type: "Iniciante ao Avançado",
    rating: 4.9,
    price: "R$ 280/h",
    imageUrl: "/images/school.png"
  },
  {
    id: 6,
    name: "Rio Kite Base",
    type: "Freeride & Big Air",
    rating: 4.8,
    price: "R$ 240/h",
    imageUrl: "/images/school.png"
  }
];

const Lessons = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>
          Escolas de <span className="text-gradient">Kite</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Agende aulas com os melhores instrutores IKO do Ceará.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {lessons.map(lesson => (
          <div key={lesson.id} className="glass-panel" style={{ overflow: 'hidden' }}>
            <div style={{ 
              aspectRatio: '16/9', 
              backgroundImage: `url(${lesson.imageUrl})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}></div>
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{lesson.name}</h4>
                  <p style={{ color: 'var(--neon-cyan)', fontSize: '0.875rem' }}>{lesson.type}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} color="#fbbf24" fill="#fbbf24" />
                  <span style={{ fontWeight: 600 }}>{lesson.rating}</span>
                </div>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.125rem', fontWeight: 700 }}>{lesson.price}</span>
                <button className="btn-neon-primary" onClick={() => alert('Agendamento de aula iniciado...')} style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                  Agendar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
