import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} style={{
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 4px 20px var(--shadow-color)' : '0 2px 10px var(--shadow-color)',
      padding: isScrolled ? '5px 0' : '15px 0'
    }}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <h1>Brital<span>Net</span></h1>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plans">Plans & Pricing</Link></li>
            <li><Link to="/coverage">Coverage</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/prize" style={{ color: 'var(--accent-orange)', border: '1px solid var(--accent-orange)', padding: '5px 10px', borderRadius: '5px' }}>Win Prize</Link></li>
            
            <li>
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </li>

            <li style={{ marginLeft: '15px' }}>
              <Link to="/login" style={{ color: 'var(--primary-blue)', fontWeight: 'bold' }}>Sign In</Link>
            </li>
            <li>
              <Link to="/register" className="btn btn-primary" style={{ padding: '8px 20px', color: 'white' }}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
