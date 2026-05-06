import { motion } from 'framer-motion';

const Plans = () => {
  const plans = [
    {
      name: "Basic Home",
      price: "25",
      features: ["10 Mbps Speed", "Unlimited Data", "Standard Local Support", "Free Installation"],
      featured: false
    },
    {
      name: "Family Pro",
      price: "45",
      features: ["50 Mbps Speed", "Unlimited Data", "Priority Support", "Modern WiFi Router Included"],
      featured: true
    },
    {
      name: "Business Elite",
      price: "85",
      features: ["100 Mbps Speed", "Unlimited Data", "24/7 Dedicated Support", "Static IP Included"],
      featured: false
    }
  ];

  return (
    <section className="page-content">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="section-title"
        >
          Our Internet Plans
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Choose the plan that fits your needs and budget.
        </motion.p>
        
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: plan.featured ? 1.08 : 1.03 }}
              className={`pricing-card ${plan.featured ? 'featured-plan' : ''}`}
            >
              {plan.featured && <div className="badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">${plan.price}<span>/mo</span></div>
              <ul className="plan-features">
                {plan.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
              <button className="btn btn-primary">Sign Up Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
