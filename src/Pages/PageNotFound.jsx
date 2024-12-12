import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary btn-lg">Go to Homepage</Link>
      </div>
    </div>
  );
}

export default PageNotFound;

