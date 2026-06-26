import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Wind, MapPin, Star, ShieldCheck, Waves, Award, Video, Coffee, CheckCircle2 } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: '120px' }}>
      
      {/* Hero Image */}
      <div style={{ 
        height: '40vh', 
        minHeight: '300px',
        maxHeight: '400px',
        backgroundImage: 'url(/images/villa1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 50%, rgba(10,15,36,1) 100%)' }}></div>
        
        {/* Back Button */}
        <div 
          onClick={() => navigate(-1)}
          className="glass-panel"
          style={{ 
            position: 'absolute', top: '20px', left: '20px', padding: '10px', 
            borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10
          }}
        >
          <ChevronLeft color="var(--text-primary)" size={24} />
        </div>
      </div>

      <div style={{ padding: '24px', marginTop: '-100px', position: 'relative', zIndex: 10 }}>
        
        {/* Title and Badge */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ background: 'var(--neon-green)', color: '#000', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', display: 'inline-block' }}>
                Pro Host Exclusivo
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.1 }}>The Reef House</h2>
              <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}>
                <MapPin size={16} color="var(--neon-cyan)" /> Frente para o mar • Cumbuco, CE
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={20} color="#fbbf24" fill="#fbbf24" />
                <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>4.9</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>128 avaliações</span>
            </div>
          </div>
        </div>

        {/* Meet the Pro Host Section (The Differential) */}
        <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px', background: 'linear-gradient(145deg, rgba(57, 255, 20, 0.05) 0%, rgba(10, 15, 36, 0.8) 100%)', border: '1px solid rgba(57, 255, 20, 0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ 
              height: '80px', width: '80px', borderRadius: '50%', 
              backgroundImage: 'url(/images/carlos.png)', 
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '3px solid var(--neon-green)'
            }}></div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Hospedado por <br/>Carlos Mario "Bebê"</h3>
              <p style={{ color: 'var(--neon-green)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', marginTop: '4px' }}>
                <Award size={16} /> 4x Campeão Mundial
              </p>
            </div>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '20px' }}>
            "Bem-vindo à minha casa no Cumbuco! Desenhei este espaço pensando 100% no velejo. Além de ficar no melhor pico, você terá acesso à minha rotina de treinos."
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)' }}>Experiências Inclusas:</h4>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Video size={18} color="var(--neon-cyan)" style={{ marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Sessão de Vídeo Análise (1h)</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Bebê analisa seus saltos e corrige sua postura na TV da sala após o velejo.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Coffee size={18} color="var(--neon-cyan)" style={{ marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Café da Manhã do Atleta</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>O mesmo menu nutritivo que o campeão usa antes de competições.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Waves size={18} color="var(--neon-cyan)" style={{ marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Downwind Secreto</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Acesso exclusivo às rotas de treino que só os locais conhecem.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>Estrutura da Casa</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <CheckCircle2 size={16} color="var(--neon-green)" /> Guarderia com Cadeado
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <CheckCircle2 size={16} color="var(--neon-green)" /> Compressor de Ar
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <CheckCircle2 size={16} color="var(--neon-green)" /> Área de Lavagem (Doce)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <CheckCircle2 size={16} color="var(--neon-green)" /> Jacuzzi de Recuperação
            </div>
          </div>
        </div>

        {/* Equipment Add-on Action */}
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--neon-cyan)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <Waves color="var(--neon-cyan)" size={24} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700 }}>Aluguel de Quiver</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Kites do ano do próprio campeão</p>
            </div>
          </div>
          <button 
            className="btn-neon" 
            onClick={() => navigate(`/property/${id}/equipment`)}
            style={{ padding: '8px 16px', fontSize: '0.875rem', borderColor: 'var(--neon-cyan)', color: 'var(--neon-cyan)' }}
          >
            Ver Itens
          </button>
        </div>

      </div>

      {/* Booking Footer */}
      <div className="glass-panel" style={{ 
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderRadius: '24px 24px 0 0', borderBottom: 'none', background: 'rgba(10, 15, 36, 0.95)'
      }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Hospedagem + Clínica</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>R$ 1.250 <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-secondary)' }}>/noite</span></h3>
        </div>
        <button className="btn-neon-primary" style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 700 }}>
          Reservar Agora
        </button>
      </div>

    </div>
  );
};

export default PropertyDetails;
