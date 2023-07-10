import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Career from './pages/Career';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Messages from './pages/Messages';

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard/career" element={<Career />} />
        <Route path="/admin/dashboard/messages" element={<Messages />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
