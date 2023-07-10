import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Career from './pages/Career';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Messages from './pages/Messages';



function App() {
  return (
    <BrowserRouter>
    {/* Routing */}
      <Routes>
        <Route path="/join" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/career" element={<Career />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
