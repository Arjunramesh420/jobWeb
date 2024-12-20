import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import contactbg from '../Assets/contactbg.jpg'; 
import emailjs from 'emailjs-com'; 

const HeroSection = styled('div')({
  height: 'auto',
  backgroundImage: `url(${contactbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '32px',
  backgroundColor: 'transparent', 
  color: '#B8860B', 
  textAlign: 'center',
  
  width: '90%',
  backdropFilter: 'blur(5px)',
});

const StyledTextField = styled(TextField)({
  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
  border: '2px solid rgba(184, 134, 11, 0.8)', 
  borderRadius: '4px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(184, 134, 11, 0.8)', 
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#B8860B', 
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#B8860B', 
  },
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ctvg90g', 'template_j2ine68', e.target, 'q1JQjjAox62QbvlSi')
      .then((result) => {
        console.log("result",result);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          phone:''
        });
      }, (error) => {
        alert('Message sending failed. Please try again.');
      });

  
    
  };

  return (
    <>
   
    <HeroSection>
      
      <StyledPaper>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Partner with Us for Excellence
        </Typography>

        <Typography variant="body1" paragraph>
          We are dedicated to providing top-notch manpower services. Let’s work together to shape a brighter future!
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                margin="normal"
                label="Name"
                variant="outlined"
                required
                name="name" 
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                margin="normal"
                label="Email"
                variant="outlined"
                required
                type="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                margin="normal"
                label="Phone Number"
                variant="outlined"
                required
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                margin="normal"
                label=" Message"
                variant="outlined"
                required
                multiline
                rows={4}
                name="message" 
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: '#B8860B',
              color: '#fff',
              marginTop: '20px',
              padding: '10px 20px',
              fontWeight: 'bold',
              width: '100%', 
            }}
          >
            Get in Touch
          </Button>
        </form>

       
      </StyledPaper>
    </HeroSection>
    </>
  );
};

export default ContactForm;
