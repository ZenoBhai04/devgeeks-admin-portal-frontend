
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AdminDashboard from './components/AdminDashboard';
import CreateJobPosting from './components/CreateJobPosting';
import JobApplicationForm from './components/JobApplicationForm';
import ViewApplications from './components/ViewApplications';
import Layout from './components/Layout';
import Prism from './components/Prism';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/create-posting" element={<CreateJobPosting />} />
            <Route path="/apply/:id" element={<JobApplicationForm />} />
            <Route path="/admin/postings/:id/applications" element={<ViewApplications />} />
            <Route path="/prism-demo" element={
              <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Prism
                  animationType="rotate"
                  timeScale={0.5}
                  height={3.5}
                  baseWidth={5.5}
                  scale={3.6}
                  hueShift={0}
                  colorFrequency={1}
                  noise={0.5}
                  glow={1}
                />
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
