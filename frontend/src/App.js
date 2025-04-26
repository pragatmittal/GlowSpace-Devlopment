import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Components
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Consultation from './pages/Consultation';
import BookAppointment from './pages/BookAppointment';
import AppointmentConfirmed from './pages/AppointmentConfirmed';
import VideoCall from './pages/VideoCall';
import ChatRoom from './pages/ChatRoom';
import EmotionDetector from './components/EmotionDetector';

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/appointment-confirmed" element={<AppointmentConfirmed />} />
            <Route path="/video-call/:roomId" element={<VideoCall />} />
            <Route path="/chat/:roomId" element={<ChatRoom />} />
            <Route path="/emotion-detection" element={<EmotionDetector />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App; 