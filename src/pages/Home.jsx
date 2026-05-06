import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container hero-content"
        >
          <h2>Fast Internet for Brital & Baalbek</h2>
          <p>We provide stable and reliable internet connections for homes and businesses in our local community.</p>
          <div className="hero-buttons">
            <Link to="/coverage" className="btn btn-primary">Check Coverage</Link>
            <Link to="/plans" className="btn btn-secondary">View Plans</Link>
          </div>
        </motion.div>
      </section>

      <section className="features">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Why Choose BritalNet?
          </motion.h2>
          <div className="feature-grid">
            {[
              { icon: "🚀", title: "High Speeds", desc: "Our local network provides fast connection for streaming and working from home." },
              { icon: "🛡️", title: "Reliable Network", desc: "We try to keep our service up and running to keep everyone connected at all times." },
              { icon: "🎧", title: "24/7 Local Support", desc: "Our support team is based right here in Baalbek, ready to help you whenever you need it." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
