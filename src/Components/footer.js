import React from 'react';
import { Typography, Box } from '@mui/material';
import { Facebook, Twitter, LinkedIn, YouTube, Instagram } from '@mui/icons-material';
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
                <a 
                    href="#" 
                    style={{
                        color: '#fff',
                        marginRight: '15px',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ff00e6'}
                    onMouseLeave={(e) => e.target.style.color = '#fff'}
                >
                    Privacy Policy
                </a>
                <a 
                    href="#" 
                    style={{
                        color: '#fff',
                        marginRight: '15px',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ff00e6'}
                    onMouseLeave={(e) => e.target.style.color = '#fff'}
                >
                    Terms of Service
                </a>
            </Typography>
            <Typography variant="body2" gutterBottom>Follow us on:</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {[
                    { icon: <Facebook />, link: "https://www.facebook.com/profile.php?id=61563937414411&mibextid=ZbWKwL" },
                    { icon: <Twitter />, link: "https://twitter.com/" },
                    { icon: <LinkedIn />, link: "https://www.linkedin.com/in/job-boom-0a5736316/" },
                    { icon: <YouTube />, link: "https://youtube.com/@jobboom-e6q?si=7eiq647J24EPYD_3" },
                    { icon: <Instagram />, link: "https://www.instagram.com/jobboom2024/" }
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        style={{
                            color: '#fff',
                            transition: 'color 0.1s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ff00e6'}
                        onMouseLeave={(e) => e.target.style.color = '#fff'}
                    >
                        {item.icon}
                    </a>
                ))}
            </Box>
            <Typography variant="body2">© 2024 Job Boom. All Rights Reserved.</Typography>
        </footer>
    );
};

export default Footer;
