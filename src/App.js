import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Languages from './pages/Languages';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Error from './pages/404';
import Cours from './pages/Cours';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

