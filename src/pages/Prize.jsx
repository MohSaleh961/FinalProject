import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Trophy, Laugh, MousePointer2 } from 'lucide-react';

const Prize = () => {
  const [phase, setPhase] = useState('start');
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [jumps, setJumps] = useState(0);
  const [answer, setAnswer] = useState('');

  const moveButton = () => {
    if (jumps < 5) {
      const newX = Math.random() * 200 - 100;
      const newY = Math.random() * 200 - 100;
      setPos({ x: newX, y: newY });
      setJumps(prev => prev + 1);
    } else {
      setPhase('riddle');
    }
  };

  const checkRiddle = (e) => {
    e.preventDefault();
    if (answer.toLowerCase().includes('internet')) {
      setPhase('win');
    } else {
      alert("Wrong! Hint: You are using it right now...");
    }
  };

  return (
    <section className="page-content" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        
        {phase === 'start' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ marginBottom: '30px' }}>
              <Laugh size={60} color="var(--accent-orange)" style={{ marginBottom: '20px' }} />
              <h2 className="section-title">The "Easy" Prize Challenge</h2>
              <p className="section-subtitle">Just click the button below to claim your free month. It's that simple!</p>
            </div>
            
            <motion.div
              animate={{ x: pos.x, y: pos.y }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <button 
                onMouseEnter={moveButton}
                onClick={() => setPhase('riddle')}
                className="btn btn-primary"
                style={{ fontSize: '1.5rem', padding: '20px 40px' }}
              >
                Claim One Month Free
              </button>
            </motion.div>
            
            <p style={{ marginTop: '40px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <MousePointer2 size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
              Warning: Our button has a mind of its own.
            </p>
          </motion.div>
        )}

        {phase === 'riddle' && (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h2 className="section-title">Okay, you caught it!</h2>
            <p className="section-subtitle">But first, answer this simple riddle:</p>
            <div style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>
                "I have no legs but I run fast. I have no voice but I talk to the world. What am I?"
              </p>
            </div>
            <form onSubmit={checkRiddle}>
              <input 
                type="text" 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer..."
                style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid var(--primary-blue)', marginBottom: '20px', textAlign: 'center', fontSize: '1.1rem' }}
              />
              <button type="submit" className="btn btn-primary full-width">Submit Answer</button>
            </form>
          </motion.div>
        )}

        {phase === 'win' && (
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Trophy size={80} color="gold" style={{ marginBottom: '20px' }} />
            <h2 className="section-title" style={{ color: 'var(--primary-blue)' }}>Congratulations!</h2>
            <p className="section-subtitle">You outsmarted the button and solved the riddle.</p>
            <div style={{ background: '#dcfce7', color: '#166534', padding: '20px', borderRadius: '10px', fontSize: '1.2rem', fontWeight: 'bold', border: '2px dashed #166534' }}>
              PROMO CODE: BRITAL-WINNER-2026
            </div>
            <p style={{ marginTop: '20px' }}>Contact support to redeem your free month!</p>
            <button onClick={() => setPhase('start')} className="btn btn-secondary" style={{ marginTop: '30px', color: 'var(--primary-blue)', borderColor: 'var(--primary-blue)' }}>Play Again</button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Prize;
