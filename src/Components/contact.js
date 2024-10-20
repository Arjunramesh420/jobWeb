import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import contactbg from '../Assets/contactbg.jpg'; 

const HeroSection = styled('div')({
  height: '100vh',
  backgroundImage: `url(${contactbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '32px',
  backgroundColor: 'transparent', // Fully transparent background
  color: '#B8860B', // Text color
  textAlign: 'center',
  maxWidth: '600px',
  width: '90%',
  backdropFilter: 'blur(5px)', // Optional: adds a blur effect to the background
});

const StyledTextField = styled(TextField)({
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background for input
  border: '2px solid rgba(184, 134, 11, 0.8)', // Visible border color
  borderRadius: '4px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(184, 134, 11, 0.8)', // Border color for focused state
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#B8860B', // Darker border on hover
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#B8860B', // Darker border on focus
  },
});

const ContactForm = () => {
  return (
    <HeroSection>
      <StyledPaper>
      <Typography variant="h4" gutterBottom fontWeight="bold">
  Partner with Us for Excellence
</Typography>

        <Typography variant="body1" paragraph>
          We are dedicated to providing top-notch manpower services. Let’s work together to shape a brighter future!
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                margin="normal"
                label="Your Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                margin="normal"
                label="Your Email"
                variant="outlined"
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                margin="normal"
                label="Your Message"
                variant="outlined"
                required
                multiline
                rows={4}
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
              width: '100%', // Full width button on mobile
            }}
          >
            Get in Touch
          </Button>
        </form>
      </StyledPaper>
    </HeroSection>
  );
};

export default ContactForm; 