import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { ForgotPassword } from './ForgotPassword';
import Register from './Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register /> } />
      </Routes>
    </Router>
  );
}

export default App;