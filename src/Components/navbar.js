import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#b8860b' }}>
      <Toolbar>
        <Box
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with opacity
            padding: '10px',
            borderRadius: '5px',
            marginRight: '6px',
          }}
        >
          <img src={logo} alt="Job Boom Logo" style={{ height: '50px' }} />
        </Box>
        <Box style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button
              style={{ color: 'white', margin: '0 8px' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A50000')} // Ironman red on hover
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button
              style={{ color: 'white', margin: '0 8px' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A50000')} // Ironman red on hover
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
          About
            </Button>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <Button
              style={{ color: 'white', margin: '0 8px' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A50000')} // Ironman red on hover
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Services
            </Button>
          </Link>
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <Button
              style={{ color: 'white', margin: '0 8px' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A50000')} // Ironman red on hover
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Gallery
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              style={{ color: 'white', margin: '0 8px' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A50000')} // Ironman red on hover
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Contact
            </Button>
          </Link>
        </Box>
        <a href="https://play.google.com/store/search?q=job%20boom&c=apps&hl=en" target="_blank" rel="noopener noreferrer">
  <Button
    style={{ color: 'white', margin: '0 8px' }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A50000')}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
  >
    Employee Login
  </Button>
</a>

<a href="https://play.google.com/store/apps/details?id=com.trustappgateway.jobboomemployer&hl=en" target="_blank" rel="noopener noreferrer">
  <Button
    style={{ color: 'white', margin: '0 8px' }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A50000')}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
  >
    Employer Login
  </Button>
</a>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
