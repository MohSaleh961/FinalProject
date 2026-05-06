import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Login = () => {
  return (
    <section className="page-content auth-container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="auth-card"
      >
        <h2>Sign In</h2>
        <p>Access your BritalNet account</p>
        <form className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="btn btn-primary full-width"
          >
            Login
          </motion.button>
        </form>
        <div className="auth-links">
          <p>Don't have an account? <Link to="/register">Create one</Link></p>
        </div>
      </motion.div>
    </section>
  );
};

export const Register = () => {
  return (
    <section className="page-content auth-container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="auth-card"
      >
        <h2>Create Account</h2>
        <p>Join the BritalNet community</p>
        <form className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="btn btn-primary full-width"
          >
            Sign Up
          </motion.button>
        </form>
        <div className="auth-links">
          <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
      </motion.div>
    </section>
  );
};
