import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUpPage from './Pages/SignUpPage';
import MainPage from './Pages/MainPage';
import Question from './Pages/Question';
import ProtectedRoutes from '../src/Middleware/ProtectedRoutes';
import Survey from './Pages/Survey';
import AboutPage from './Pages/AboutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/main-dashboard" element={<MainPage />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/question" element={<Question />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

