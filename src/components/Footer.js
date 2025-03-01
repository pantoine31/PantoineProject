import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center mt-5 py-3 bg-dark text-white">
      <div className="container">
        <p>&copy; 2025 Papakonstantinou Antonios - All Rights Reserved</p>
        <p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-linkedin"></i>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
