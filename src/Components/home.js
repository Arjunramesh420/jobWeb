import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Paper,
  TextField,
  Card,
  CardContent,
  CardActions,
  Snackbar,
  Divider,
  Radio,
  FormControlLabel,
  RadioGroup, FormLabel , FormControl
} from '@mui/material';
import { Alert } from '@mui/material';
import { Facebook, Twitter, LinkedIn  } from '@mui/icons-material'; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import heroImage from '../Assets/heroHome.jpg'; // Adjust the path as necessary
import logo from '../Assets/logo.png'; // Adjust the path as necessary
import whoImage from '../Assets/who.jpg';
import backgroundImage from '../Assets/homecontactbg.jpg';
import { Link } from 'react-router-dom'; // or import from the appropriate library


const JobBoomHomepage = () => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);

  const testimonials = [
    '"Job Boom transformed our hiring process! The candidates they provided were not only qualified but also a perfect fit for our culture. Thank you!" - Priya Sharma',
    '"I can\'t express how grateful we are for Job Boom\'s services. The team is highly responsive and really understands our needs!" - Rahul Verma',
    '"The quality of candidates we received was outstanding! Job Boom made our recruitment journey a breeze." - Sneha Iyer',
    '"From the initial consultation to the final hire, Job Boom was there every step of the way. Their professionalism is commendable!" - Anil Gupta',
    '"Job Boom exceeded our expectations in every way. We found amazing talent in record time. Highly recommend!" - Kavita Rao'
];

const jobOpenings = [
  {
    title: 'Driver',
    location: 'Mumbai, Maharashtra',
    description: 'Seeking an experienced driver with a valid license and a good knowledge of city routes. Must be punctual and reliable.'
  },
  {
    title: 'Carpenter',
    location: 'Bangalore, Karnataka',
    description: 'Looking for a skilled carpenter with at least 3 years of experience. Must be able to read blueprints and work with minimal supervision.'
  },
  {
    title: 'Building Construction Worker',
    location: 'Delhi, NCR',
    description: 'Hiring construction workers for ongoing projects. Candidates should have prior experience in building construction and be physically fit.'
  }
];


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const services = [
    {
      name: 'Housekeeping',
      description: 'Professional housekeeping staff providing thorough cleaning and maintenance services for homes and businesses. Our team ensures a clean and hygienic environment, tailored to meet client needs.'
    },
    {
      name: 'Garments Worker',
      description: 'Skilled workers for various roles in the garments industry, including sewing, quality control, and finishing. Our workers ensure high standards of production and efficiency.'
    },
    {
      name: 'Security Guards',
      description: 'Trained security personnel dedicated to ensuring safety and security in various environments, including commercial, residential, and industrial sites. Our guards are equipped to handle emergencies and maintain order.'
    }
  ];
  

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '300px', md: '600px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'gold' }}>
            Igniting Your Career Potential
          </Typography>
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: 'gold' }}>
            Find the perfect fit in a booming job market.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#b8860b',
              color: '#000',
              marginTop: '20px',
              '&:hover': {
                bgcolor: '#A50000',
                color: '#fff', // Change text color to white on hover
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ bgcolor: '#A50000', color: '#fff', padding: '0' }}>
        <Box sx={{ display: 'flex', marginY: '0', padding: '0 20px' }}>
          <Box sx={{ flex: 1, textAlign: 'left' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'gold', paddingTop: '10px' }}>
              Who We Are
            </Typography>
            <Typography>
              At Job Boom, we take pride in being a premier manpower solutions provider based in India, a country renowned for its rich pool of talent and diverse workforce. With the highest manpower after China, India stands at the forefront of global human resource solutions. Our mission is to bridge the gap between exceptional talent and thriving businesses, both within India and around the globe.
            </Typography>
            <br />
            <Typography>
              In a rapidly changing job market, we understand that finding the right talent can be a daunting task. That’s where we come in. Our dedicated team of experts leverages years of industry experience and deep market insights to connect organizations with skilled professionals across various sectors. Whether you’re a startup looking for your first hire or a multinational corporation seeking specialized talent, we tailor our solutions to meet your unique needs.
            </Typography>
            <br />
            <Typography>
              We offer a comprehensive suite of services designed to empower both job seekers and employers. From talent acquisition and temporary staffing to recruitment process outsourcing and consulting services, our holistic approach ensures that we deliver the best outcomes for all parties involved. Our commitment to quality and efficiency sets us apart, making us a trusted partner in the journey of talent acquisition.
            </Typography>
            <br />
            <Typography>
              At Job Boom, we believe that every individual deserves the opportunity to realize their full potential. Our mission goes beyond simply filling vacancies; we aim to foster meaningful connections that drive growth and innovation. By understanding the aspirations of job seekers and the requirements of employers, we create a synergy that benefits both sides.
            </Typography>
            <br />
            <Typography>
              As we expand our reach beyond Indian borders, we remain dedicated to maintaining our high standards of service and integrity. Our global perspective allows us to cater to the evolving needs of businesses worldwide, ensuring that you have access to the best talent, no matter where you are located.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#b8860b',
                color: '#000',
                marginTop: '20px',
                '&:hover': {
                  bgcolor: '#A50000',
                  color: '#fff', // Change text color to white on hover
                },
              }}
            >
              Learn More
            </Button>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={whoImage} alt="Who We Are" style={{ maxWidth: '100%', height: 'auto', paddingLeft: '50px' }} />
          </Box>
        </Box>
        <Box sx={{ marginY: '40px', padding: '0 20px' }}>
  <Typography variant="h4" gutterBottom sx={{ color: 'gold' }}>Our Services</Typography>
  <Grid container spacing={3}>
    {services.map((service, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Link to={`/services/${service.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card sx={{ bgcolor: '#333', color: '#fff', height: '100%', cursor: 'pointer' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', textAlign: 'center' }}>
              <div>
                <Typography variant="h5" sx={{ color: 'gold', marginBottom: 1 }}>{service.name}</Typography>
                <Divider sx={{ backgroundColor: '#b8860b', marginY: 1 }} />
              </div>
              <Typography variant="body2" sx={{ color: '#fff', flexGrow: 1 }}>
                {service.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  color: '#b8860b',
                  '&:hover': {
                    color: '#fff',
                  },
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    ))}
  </Grid>
</Box>


<Box sx={{ marginY: '40px', padding: '0 20px' }}>
  <Typography variant="h4" gutterBottom sx={{ color: 'gold' }}>Current Job Openings</Typography>
  <br />
  <Typography>Explore the latest opportunities and take your career to the next level.</Typography>
  <br />
  <Grid container spacing={2}>
    {jobOpenings.map((job, index) => (
      <Grid item xs={12} sm={4} key={index}>
        <Paper sx={{ 
          padding: '15px', 
          bgcolor: '#222', 
          color: '#fff', 
          height: '200px',  
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between' 
        }}>
          <Typography variant="h6" sx={{ color: 'gold' }}>{job.title}</Typography>
          <Divider sx={{ backgroundColor: 'gold', marginY: '10px' }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ color: 'silver', marginRight: '5px' }} />
            <Typography variant="subtitle1" sx={{ color: 'silver' }}>{job.location}</Typography>
          </Box>
          <Typography variant="body2" sx={{ marginTop: '10px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {job.description}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
  <Button
    variant="contained"
    sx={{
      bgcolor: '#b8860b',
      color: '#000',
      marginTop: '20px',
      '&:hover': {
        bgcolor: '#A50000',
        color: '#fff',
      },
    }}
  >
    View All Jobs
  </Button>
</Box>
<Box sx={{ marginY: '40px', padding: '0 20px' }}>
  <Typography variant="h4" gutterBottom sx={{ color: 'gold' }}>What Our Clients Say</Typography>
  <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
    <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'black' }}>
      {testimonials[currentTestimonialIndex]}
    </Typography>
  </Box>
</Box>

        <Box
      sx={{
        marginY: '40px',
        padding: '20px',
        textAlign: 'center',
        border: '2px solid black',
        borderRadius: '8px',
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '8px',
        }}
      />
      <Typography variant="h4" gutterBottom sx={{ color: 'gold', position: 'relative' }}>Get in Touch</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                sx: {
                  fontWeight: 'bold',
                  color: 'black',
                },
              }}
              InputProps={{
                sx: {
                  '&:focus': {
                    borderColor: 'black',
                    boxShadow: '0 0 5px black',
                  },
                },
              }}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '500px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" sx={{ width: '500px' }}>
              <RadioGroup row>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                sx: {
                  fontWeight: 'bold',
                  color: 'black',
                },
              }}
              InputProps={{
                sx: {
                  '&:focus': {
                    borderColor: 'black',
                    boxShadow: '0 0 5px black',
                  },
                },
              }}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '500px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                sx: {
                  fontWeight: 'bold',
                  color: 'black',
                },
              }}
              InputProps={{
                sx: {
                  '&:focus': {
                    borderColor: 'black',
                    boxShadow: '0 0 5px black',
                  },
                },
              }}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '500px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="GST Number"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                sx: {
                  fontWeight: 'bold',
                  color: 'black',
                },
              }}
              InputProps={{
                sx: {
                  '&:focus': {
                    borderColor: 'black',
                    boxShadow: '0 0 5px black',
                  },
                },
              }}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '500px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#b8860b',
                color: '#000',
                '&:hover': {
                  bgcolor: '#A50000',
                  color: '#fff',
                },
                width: '500px',
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your message has been sent!
        </Alert>
      </Snackbar>
    </Box>



      </Container>
    </>
  );
};

export default JobBoomHomepage;
