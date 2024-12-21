import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md')); 

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', path: '/home' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{height:'100%',backgroundColor:'#A50000'}}
    >
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.text}>
            <Link to={item.path} style={{ textDecoration: 'none', color: '#ffff' }}>
            <NavigateNextIcon style={{color:'yellow'}}/>  <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Box
          style={{
          
            padding: '10px',
            borderRadius: '5px',
            marginRight: 'auto',
          }}
        >
          <img src={logo} alt="Job Boom Logo" style={{ height: '40px' }} />
        </Box>
        {isMediumUp ? ( // Show buttons only on medium or larger screens
          <Box style={{  display: 'flex',  marginLeft:'auto' }}>
            {navItems.map((item) => (
              <Link to={item.path} style={{ textDecoration: 'none' }} key={item.text}>
                <Button
                  style={{ color: 'white' }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff00e6')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>
        ) : (
          // Show Menu button on smaller screens
          <Button
            onClick={toggleDrawer(true)}
            style={{ color: 'white'}}
          >
            <MenuIcon/>
          </Button>
        )}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} >
          {drawer}
        </Drawer>
        <a href="https://play.google.com/store/search?q=job%20boom&c=apps&hl=en" target="_blank" rel="noopener noreferrer">
          <Button
            style={{ color: 'white' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff00e6')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Employee Login
          </Button>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.trustappgateway.jobboomemployer&hl=en" target="_blank" rel="noopener noreferrer">
          <Button
            style={{ color: 'white' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff00e6')}
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
