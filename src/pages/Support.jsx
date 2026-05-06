import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Support = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How do I pay my bill?", a: "You can pay your monthly subscription through OMT, Wish Money, or by visiting our office in Brital." },
    { q: "My internet is slow, what should I do?", a: "First, try restarting your router. If the problem persists, please call our local support line at 76976222." },
    { q: "Is there a connection fee?", a: "Installation fees vary depending on your location and the type of equipment required. Contact us for a quote." }
  ];

  return (
    <section className="page-content">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Customer Support
        </motion.h2>
        <div className="support-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Frequently Asked Questions</h3>
            <div className="faq-container" style={{ marginTop: '20px' }}>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item" style={{ marginBottom: '10px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '15px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      border: 'none',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    {faq.q}
                    <motion.span
                      animate={{ rotate: activeFaq === i ? 180 : 0 }}
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p style={{ padding: '15px', background: 'var(--card-bg)', color: 'var(--text-primary)' }}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-form"
          >
            <h3>Send us a Message</h3>
            <form style={{ marginTop: '20px' }}>
              <label>Your Name</label>
              <input type="text" />
              
              <label>Your Phone</label>
              <input type="text" />
              
              <label>Message</label>
              <textarea rows="5"></textarea>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn btn-primary full-width"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
