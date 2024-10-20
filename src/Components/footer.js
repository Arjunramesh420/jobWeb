import React from 'react';
import { Typography, Box } from '@mui/material';
import { Facebook, Twitter, LinkedIn, YouTube, Instagram } from '@mui/icons-material'; // Import Instagram icon
import logo from '../Assets/logo.png';

const Footer = () => {
    return (
        <footer style={{ 
            textAlign: 'center', 
            padding: '40px 0', 
            backgroundColor: '#111', 
            color: '#fff', 
            marginTop: 'auto', // Ensures it stays at the bottom
        }}>
            <img src={logo} alt="Job Boom Logo" style={{ width: '150px', marginBottom: '20px' }} />
            <Typography variant="body2" gutterBottom>
                <a href="#" style={{ color: '#fff', marginRight: '15px' }}>Privacy Policy</a>
                <a href="#" style={{ color: '#fff', marginRight: '15px' }}>Terms of Service</a>
            </Typography>
            <Typography variant="body2" gutterBottom>Follow us on:</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="https://www.facebook.com/" style={{ color: '#fff' }}><Facebook /></a>
                <a href="https://twitter.com/" style={{ color: '#fff' }}><Twitter /></a>
                <a href="https://www.linkedin.com/in/job-boom-0a5736316/" style={{ color: '#fff' }}><LinkedIn /></a>
                <a href="https://studio.youtube.com/channel/UCJ6iDlIxSuF8xzbq_EFDtGA" style={{ color: '#fff' }}><YouTube /></a>
                <a href="https://www.instagram.com/jobboom2024/" style={{ color: '#fff' }}><Instagram /></a> {/* Added Instagram icon */}
            </Box>
            <Typography variant="body2">© 2024 Job Boom. All Rights Reserved.</Typography>
        </footer>
    );
};

export default Footer;
