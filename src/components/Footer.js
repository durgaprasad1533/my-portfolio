// Footer.js
import React from 'react';
import '../css/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Mounika's Portfolio. All rights reserved.</p>
            <div className="footer-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:mounika@example.com">Email Me</a>
            </div>
        </footer>
    );
};

export default Footer;
