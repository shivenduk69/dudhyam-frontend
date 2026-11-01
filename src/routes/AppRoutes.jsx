import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Farmers from '../pages/Farmers';
import Operations from '../pages/Operations';
import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import ProtectedRoute from '../components/ProtectedRoute';

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// 404 Not Found Page
const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center space-y-4">
    <span className="text-6xl font-black text-navy font-mono">404</span>
    <h2 className="text-2xl font-bold text-navy">Page Not Found</h2>
    <p className="text-sm text-navy/70 max-w-md">
      The requested Dudhyam page could not be located. Please check the URL or return to our homepage.
    </p>
    <Link
      to="/"
      className="mt-2 inline-flex items-center bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-2.5 rounded-xl text-sm shadow transition-colors"
    >
      Return to Home
    </Link>
  </div>
);

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
