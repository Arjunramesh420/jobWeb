import React from 'react';
import { Box, Typography } from '@mui/material';

// Importing images from the correct path
import one from '../Assets/one.jpg';
import two from '../Assets/two.jpg';
import three from '../Assets/three.jpg';
import four from '../Assets/four.jpg';
import five from '../Assets/five.jpg';
import six from '../Assets/six.jfif';
// import seven from '../Assets/seven.jpg';
import eight from '../Assets/eight.jpg';
import nine from '../Assets/nine.jfif';
// import ten from '../Assets/ten.jpg';
import eleven from '../Assets/eleven.jfif';
import twelve from '../Assets/twelve.jpg';
import thirteen from '../Assets/thirteen.jpg';
import fourteen from '../Assets/fourteen.jpg';
import fifteen from '../Assets/fifteen.jpg';
import sixteen from '../Assets/sixteen.jpg';
// import seventeen from '../Assets/seventeen.jpg';
import eighteen from '../Assets/eighteen.jpg';
import nineteen from '../Assets/nineteen.jpg';
import twenty from '../Assets/twenty.jpg';
import twentyone from '../Assets/twentyone.jpg';
import twentytwo from '../Assets/twentytwo.jpg';
import twentythree from '../Assets/twentythree.jpg';
import twentyfour from '../Assets/twentyfour.jpg';
import twentyfive from '../Assets/twentyfive.jpg';
import twentysix from '../Assets/twentysix.jpg';
import twentyseven from '../Assets/twentyseven.jpg';
import twentyeight from '../Assets/twentyeight.jpg';
import twentynine from '../Assets/twentynine.jpg';
import thirty from '../Assets/thirty.jpg';

const images = [
  one, two, three, four, five, six,  eight, nine, 
  eleven, twelve, thirteen, fourteen, fifteen, sixteen,
  eighteen, nineteen, twenty,
  twentyone, twentytwo, twentythree, twentyfour, twentyfive,
  twentysix, twentyseven, twentyeight, twentynine, thirty
];

const Gallery = () => {


  return (
    <Box
      sx={{
        backgroundColor: '#A50000', // Set background color
        minHeight: '100vh', // Ensure full height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        textAlign: 'center',
      }}
    >
<Typography
  variant="h2"
  component="h1"
  gutterBottom
  color="white"
  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
>
  “Hard work beats talent when talent doesn’t work hard.” – Tim Notke
</Typography>

    
      <Box
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={2}
        width="100%"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <img 
              src={image} 
              alt={`Image ${index + 1}`} 
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
