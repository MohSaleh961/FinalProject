import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="page-content">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Story
        </motion.h2>
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Roots in Brital</h3>
            <p style={{ marginBottom: '20px' }}>
              We started with just a few antennas and a vision to bring stable connection to our neighbors. Today, we are proud to be the primary choice for families and businesses across Brital and Baalbek City.
            </p>
            <p>
              We don't just provide internet; we live here. We know the terrain, we know the weather challenges in winter, and we built our network to withstand it all. When you call us, you're talking to a neighbor.
            </p>
          </motion.div>
          
          <div className="stats-container">
            {[
              { val: "500+", label: "Homes Connected" },
              { val: "24/7", label: "Local Support Team" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="stat-box"
              >
                <h3>{stat.val}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
