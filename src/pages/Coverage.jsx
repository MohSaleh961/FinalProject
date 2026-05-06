import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, XCircle, Search, MapPin } from 'lucide-react';

const Coverage = () => {
  const [query, setQuery] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);

  const areas = [
    { area: "Brital", status: "Full Fiber & Wireless Coverage" },
    { area: "Baalbek City", status: "90% Coverage (Main Districts)" },
    { area: "Duris", status: "High-Speed Wireless Available" },
    { area: "Talia", status: "Coming Soon (Late 2026)" },
    { area: "Hortala", status: "Full Wireless Coverage" },
    { area: "Nabi Chit", status: "Fiber Expansion in Progress" }
  ];

  const handleCheck = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsChecking(true);
    setResult(null);

    setTimeout(() => {
      const found = areas.find(a => 
        a.area.toLowerCase().includes(query.toLowerCase()) && !a.status.includes("Coming Soon")
      );
      
      setIsChecking(false);
      setResult(found ? 'available' : 'unavailable');
    }, 1200);
  };

  return (
    <section className="page-content">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Network Coverage
        </motion.h2>

        <div className="coverage-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Where We Operate</h3>
            <p style={{ marginBottom: '20px' }}>
              We are expanding our network every day. Currently, we provide full coverage in the following areas:
            </p>
            
            <form onSubmit={handleCheck} className="search-form" style={{ marginBottom: '30px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input 
                  type="text" 
                  placeholder="Enter your village or city..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ paddingLeft: '40px' }}
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isChecking}>
                {isChecking ? 'Checking...' : 'Check Availability'}
              </button>
            </form>

            <AnimatePresence>
              {result === 'available' && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ background: '#dcfce7', color: '#166534', padding: '15px', borderRadius: '5px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <CheckCircle size={20} />
                  <span>Great news! High-speed internet is available in <strong>{query}</strong>.</span>
                </motion.div>
              )}

              {result === 'unavailable' && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ background: '#fee2e2', color: '#991b1b', padding: '15px', borderRadius: '5px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <XCircle size={20} />
                  <span>Sorry, we haven't reached <strong>{query}</strong> yet. We are working on it!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="coverage-status">
              {areas.map((item, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <MapPin size={16} color="var(--primary-blue)" />
                  <span><strong>{item.area}:</strong> {item.status}</span>
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="map-wrapper"
          >
            <div className="map-responsive">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13233.123456789012!2d36.12345678901234!3d33.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518b12345678901%3A0x1234567890123456!2sBrital%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1234567890123" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
