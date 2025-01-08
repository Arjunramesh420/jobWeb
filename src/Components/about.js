import React from 'react';
import { Divider, Chip } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment'; // Mission icon
import VisibilityIcon from '@mui/icons-material/Visibility'; // Vision icon
import EngineeringIcon from '@mui/icons-material/Engineering'; // Example icon for Engineering
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; // Example icon for Business
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Example icon for HR

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ backgroundColor: 'black', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
          About Us
        </h1>
        <p style={{ fontSize: '15px', color: 'white', marginBottom: '30px' ,fontWeight:'bold'}}>
          Welcome to <span style={{ fontWeight: 'bold', color: '#ff00e6' }}>JOB BOOM</span> , your go-to destination for finding meaningful employment and connecting with talent. Founded in 2024, our mission is to simplify the job search process and empower both job seekers and employers to achieve their goals. Our intuitive interface allows job seekers to easily browse and filter job listings by location, industry, and job type.
        </p>

        {/* Join Our Community Button */}
        <a 
          href="/join" 
          style={{
            display: 'inline-block',
            backgroundColor: '#2980b9',
            color: '#fff',
            fontWeight: 'bold',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
            marginTop: '20px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b8860b'} // Hover color
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2980b9'} // Original color
        >
          Join Us Today
        </a>
      </div>

      {/* Mission and Vision Section with Border and Vertical Divider */}
      <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          padding: '20px', 
          border: '2px solid black', // Black border around the section
          borderRadius: '8px', 
          margin: '20px auto', 
          width: '80%' 
        }}>
        <div style={{ display: 'flex', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
          {/* Mission Card */}
          <div 
            style={{ 
              backgroundColor: '#ff00e6', 
              padding: '20px', 
              flex: 1, 
              textAlign: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              cursor: 'pointer', // Clickable effect
              transition: 'transform 0.3s' // Animation for hover effect
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale on hover
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
          >
            <h3 style={{ color: 'black', margin: '10px 0' }}>Our Mission</h3>
            <AssignmentIcon style={{ fontSize: '2rem', color: 'black', margin: '0 auto' }} />
            <p style={{ color: 'black' }}>
              At JOB BOOM, we believe that the right job can transform lives. We strive to create a platform where individuals can discover opportunities that align with their skills, interests, and values, while helping companies find the perfect fit for their teams.
            </p>
          </div>
          
          {/* Vertical Divider */}
          <Divider orientation="vertical" style={{ backgroundColor: '#b8860b', width: '2px' }} />

          {/* Vision Card */}
          <div 
            style={{ 
              backgroundColor: '#b8860b', 
              padding: '20px', 
              flex: 1, 
              textAlign: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              cursor: 'pointer', // Clickable effect
              transition: 'transform 0.3s' // Animation for hover effect
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale on hover
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
          >
            <h3 style={{ color: '#fff', margin: '10px 0' }}>Our Vision</h3>
            <VisibilityIcon style={{ fontSize: '2rem', color: '#fff', margin: '0 auto' }} />
            <p style={{ color: '#fff' }}>
              We envision a world where everyone has access to fulfilling careers, and organizations thrive through diverse and inclusive workplaces. We aim to be the leading platform that bridges the gap between talent and opportunity.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Job Categories Section */}
    {/* Popular Job Categories Section */}
<div style={{ padding: '20px', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '20px' }}>Popular Job Categories We Cater To</h2>
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
    <Chip 
      icon={<EngineeringIcon style={{ color: '#ff00e6' }} />} 
      label="Builder" 
      variant="outlined" 
      style={{ borderColor: 'black', color: 'black', cursor: 'pointer', transition: 'transform 0.3s' }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale on hover
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
    />
    <Chip 
      icon={<BusinessCenterIcon style={{ color: '#ff00e6' }} />} 
      label="Clerks" 
      variant="outlined" 
      style={{ borderColor: 'black', color: 'black', cursor: 'pointer', transition: 'transform 0.3s' }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale on hover
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
    />
    <Chip 
      icon={<AccountCircleIcon style={{ color: '#ff00e6' }} />} 
      label="Store Keeper" 
      variant="outlined" 
      style={{ borderColor: 'black', color: 'black', cursor: 'pointer', transition: 'transform 0.3s' }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale on hover
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
    />
    <Chip 
      icon={<EngineeringIcon style={{ color: '#ff00e6' }} />} 
      label="Auto/Moto Mechanics" 
      variant="outlined" 
      style={{ borderColor: 'black', color: 'black', cursor: 'pointer', transition: 'transform 0.3s' }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale on hover
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
    />
    <Chip 
      icon={<BusinessCenterIcon style={{ color: '#ff00e6' }} />} 
      label="Nursing Assistant (CNA)" 
      variant="outlined" 
      style={{ borderColor: 'black', color: 'black', cursor: 'pointer', transition: 'transform 0.3s' }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale on hover
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
    />
    <Chip 
      icon={<AccountCircleIcon style={{ color: '#ff00e6' }} />} 
      label="Customer Service Assistant" 
      variant="outlined" 
      style={{ borderColor: 'black', color: 'black', cursor: 'pointer', transition: 'transform 0.3s' }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale on hover
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
    />
  </div>

  {/* Browse All Link */}
  <a 
    href="/categories" 
    style={{
      display: 'inline-block',
      marginTop: '20px',
      color: 'black',
      fontWeight: 'bold',
      textDecoration: 'none',
      border: '2px solid black',
      padding: '10px 20px',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff00e6'} // Hover color
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} // Original color
  >
    Browse All
  </a>
</div>

    </div>
  );
};

export default About;
