import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar />
      
      {/* Main content (dynamic pages rendered by Router) */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
