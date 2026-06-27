import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Award, Star, Camera, PlayCircle, Anchor, ShieldCheck } from 'lucide-react';

const hostsData: Record<number, any> = {
  1: {
    name: "Carlos Mario 'Bebê'",
    titles: "4x Campeão Mundial Freestyle",
    spot: "Lagoa do Cauípe, CE",
    bio: "Nascido e criado no Cauípe, Carlos Mario revolucionou o kitesurf freestyle. Venha ficar na minha pousada e aprender os segredos dos aéreos insanos nas águas lisas da lagoa.",
    imageUrl: "/images/carlos.png",
    followers: "120K",
    rating: "4.9",
    properties: [
      { id: 1, name: "Bebê Kite House", type: "Pousada Inteira", price: "R$ 450/noite", image: "/images/villa1.png" },
      { id: 11, name: "Cauípe Sunset House", type: "Quarto Privativo", price: "R$ 200/noite", image: "/images/villa2.png" }
    ],
    lessons: [
      { id: 1, name: "Freestyle Masterclass", level: "Avançado", price: "R$ 300/hora" },
      { id: 11, name: "Iniciantes Kitesurf", level: "Iniciante", price: "R$ 200/hora" }
    ]
  },
  2: {
    name: "Bruna Kajiya",
    titles: "3x Campeã Mundial",
    spot: "Ilha do Guajirú, CE",
    bio: "Uma das maiores lendas do kitesurf feminino. Fique na minha casa de praia e viva o lifestyle do kite em um dos melhores picos do mundo com vento perfeito todos os dias.",
    imageUrl: "/images/bruna.png",
    followers: "250K",
    rating: "5.0",
    properties: [
      { id: 2, name: "Bruna's Ocean Villa", type: "Vila Luxo", price: "R$ 800/noite", image: "/images/villa3.png" },
      { id: 22, name: "Guajirú Guest House", type: "Pousada Inteira", price: "R$ 450/noite", image: "/images/villa4.png" }
    ],
    lessons: [
      { id: 2, name: "Kite Clinic para Mulheres", level: "Todos os níveis", price: "R$ 250/hora" },
      { id: 22, name: "Mentoria de Alta Performance", level: "Pro", price: "R$ 400/hora" }
    ]
  },
  3: {
    name: "Mitu Monteiro",
    titles: "Campeão Mundial Wave",
    spot: "Cabo Verde / Ceará",
    bio: "Pioneiro do strapless kitesurfing, Mitu traz toda a alma do oceano. Venha conhecer a verdadeira essência das ondas e a cultura da nossa família no Kitesurf.",
    imageUrl: "/images/mitu.png",
    followers: "180K",
    rating: "4.8",
    properties: [
      { id: 3, name: "Wave Master Lodge", type: "Pousada Inteira", price: "R$ 550/noite", image: "/images/villa5.png" },
      { id: 33, name: "Sal Island Roots", type: "Quarto Rústico", price: "R$ 250/noite", image: "/images/villa6.png" }
    ],
    lessons: [
      { id: 3, name: "Strapless Clinic", level: "Avançado", price: "R$ 350/hora" },
      { id: 33, name: "Ondas para Iniciantes", level: "Intermediário", price: "R$ 250/hora" }
    ]
  },
  4: {
    name: "Mikaili Sol",
    titles: "6x Campeã Mundial",
    spot: "Taíba, CE",
    bio: "A maior prodígio do kitesurf moderno. Fique no meu refúgio secreto na Taíba e eleve o seu nível de freestyle para outro patamar em águas perfeitas.",
    imageUrl: "/images/mikaili.png",
    followers: "210K",
    rating: "5.0",
    properties: [
      { id: 4, name: "Kite Mansion Taíba", type: "Vila Luxo", price: "R$ 900/noite", image: "/images/villa1.png" },
      { id: 44, name: "Taíba Secret Hideaway", type: "Bangalô Privativo", price: "R$ 600/noite", image: "/images/villa2.png" }
    ],
    lessons: [
      { id: 4, name: "Freestyle Pro Coaching", level: "Pro", price: "R$ 400/hora" },
      { id: 44, name: "Camp de Férias Kitesurf", level: "Iniciante", price: "R$ 200/hora" }
    ]
  },
  5: {
    name: "Reno Romeu",
    titles: "Recordista Mundial",
    spot: "Rio de Janeiro, RJ",
    bio: "Do Rio para o mundo. O big air é minha paixão e bater recordes é rotina. Venha saltar mais alto do que nunca e viver a adrenalina extrema.",
    imageUrl: "/images/reno.png",
    followers: "150K",
    rating: "4.9",
    properties: [
      { id: 5, name: "Rio Kite Retreat", type: "Cobertura Frente Mar", price: "R$ 500/noite", image: "/images/villa3.png" },
      { id: 55, name: "Araruama Wind Villa", type: "Casa Inteira", price: "R$ 350/noite", image: "/images/villa4.png" }
    ],
    lessons: [
      { id: 5, name: "Big Air Masterclass", level: "Avançado", price: "R$ 350/hora" },
      { id: 55, name: "Kite Loops Extremos", level: "Pro", price: "R$ 400/hora" }
    ]
  },
  6: {
    name: "Matchu Lopes",
    titles: "Campeão Mundial Wave",
    spot: "Sal, Cabo Verde",
    bio: "As ondas grandes são o meu parquinho. Se quiser aprender a surfar com pipa em ondas que metem respeito, a ilha do Sal é o lugar e eu sou o seu guia.",
    imageUrl: "/images/matchu.png",
    followers: "110K",
    rating: "4.9",
    properties: [
      { id: 6, name: "Ponta Preta Lodge", type: "Vila na Praia", price: "R$ 750/noite", image: "/images/villa5.png" },
      { id: 66, name: "Santa Maria Guesthouse", type: "Pousada Simples", price: "R$ 180/noite", image: "/images/villa6.png" }
    ],
    lessons: [
      { id: 6, name: "Wave Riding Intenso", level: "Avançado", price: "R$ 300/hora" },
      { id: 66, name: "Primeiros Passos nas Ondas", level: "Intermediário", price: "R$ 250/hora" }
    ]
  }
};

const HostProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const host = hostsData[Number(id)] || hostsData[1];

  return (
    <div className="host-profile-container" style={{ paddingBottom: '100px' }}>
      {/* Hero Section of Profile */}
      <div style={{ position: 'relative', height: '450px', backgroundImage: `url(${host.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-80px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(2,6,23,0.3) 0%, rgba(2,6,23,0.95) 100%)' }}></div>
        
        <button 
          onClick={() => navigate(-1)}
          className="glass-panel"
          style={{ position: 'absolute', top: '100px', left: '24px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, border: 'none' }}
        >
          <ArrowLeft color="#fff" size={24} />
        </button>

        <div style={{ position: 'absolute', bottom: '32px', left: '5%', right: '5%', zIndex: 10, maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid var(--neon-green)', color: 'var(--neon-green)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '16px' }}>
            <ShieldCheck size={14} /> PRO HOST VERIFICADO
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '8px', letterSpacing: '-1px' }}>{host.name}</h1>
          <p style={{ color: 'var(--neon-cyan)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '16px' }}>{host.titles}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'var(--text-secondary)', fontSize: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={18} /> {host.spot}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={18} color="#fbbf24" fill="#fbbf24" /> {host.rating} (124 avaliações)</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 5%' }}>
        {/* Stats Row */}
        <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-around', padding: '24px', marginBottom: '48px', borderRadius: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>{host.properties.length}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Casas</p>
          </div>
          <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>{host.lessons.length}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Aulas</p>
          </div>
          <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>{host.followers}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Fãs</p>
          </div>
        </div>

        {/* Bio */}
        <div style={{ marginBottom: '56px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Anchor color="var(--neon-cyan)" /> A Lenda
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem', maxWidth: '800px' }}>{host.bio}</p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <button className="glass-panel" onClick={() => alert('Redirecionando para o Instagram...')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 24px', color: '#fff', border: '1px solid var(--glass-border)', cursor: 'pointer', borderRadius: '12px', fontWeight: 600 }}>
              <Camera size={20} /> Instagram
            </button>
            <button className="glass-panel" onClick={() => alert('Redirecionando para o YouTube...')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 24px', color: '#fff', border: '1px solid var(--glass-border)', cursor: 'pointer', borderRadius: '12px', fontWeight: 600 }}>
              <PlayCircle size={20} /> YouTube
            </button>
          </div>
        </div>

        {/* Properties */}
        <div style={{ marginBottom: '56px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>Hospede-se com {host.name.split(' ')[0]}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {host.properties.map((prop: any) => (
              <div key={prop.id} className="glass-panel" style={{ overflow: 'hidden', cursor: 'pointer', borderRadius: '24px', transition: 'transform 0.3s ease' }} onClick={() => navigate(`/property/${prop.id}`)}>
                <div style={{ height: '240px', backgroundImage: `url(${prop.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ padding: '24px' }}>
                  <h4 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '8px' }}>{prop.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '16px' }}>{prop.type}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, color: 'var(--neon-cyan)', fontSize: '1.25rem' }}>{prop.price}</span>
                    <button className="btn-neon-primary" style={{ padding: '8px 20px' }} onClick={(e) => { e.stopPropagation(); navigate(`/property/${prop.id}`); }}>Ver Mais</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lessons */}
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>Aprenda com o Mestre</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '24px' }}>
            {host.lessons.map((lesson: any) => (
              <div key={lesson.id} className="glass-panel" style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '24px' }}>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '8px' }}>{lesson.name}</h4>
                  <p style={{ color: 'var(--neon-cyan)', fontSize: '1rem', fontWeight: 600 }}>Nível: {lesson.level}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '12px' }}>{lesson.price}</p>
                  <button className="btn-neon" style={{ padding: '8px 24px' }} onClick={() => alert('Iniciando fluxo de agendamento...')}>Agendar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfile;
