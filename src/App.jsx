import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Coverage from './pages/Coverage';
import Support from './pages/Support';
import { Login, Register } from './pages/Auth';
import Prize from './pages/Prize';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/prize" element={<Prize />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
