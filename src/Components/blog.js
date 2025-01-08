import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import images directly
import blogOneImage from '../Assets/blogOne.jpg';  // Adjust the path according to your folder structure
// import blogTwoImage from './Assets/blogTwo.jpg';  // Same here

const Blog = () => {
  const navigate = useNavigate();

  // Example list of blogs
  const blogs = [
    {
      id: 1,
      title: 'Discover the Ultimate Solution for All Your Driver Needs with Boom Recruiter App',
      image: blogOneImage, // Imported image
      shortDescription: 'Finding a reliable driver can be a real challenge......',
      content: 'This is the detailed content for blog post 1. More information goes here...',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      // image: blogTwoImage, // Imported image
      shortDescription: 'Stay Tuned Folks !!',
      content: '',
    },
  ];

  // Component to display individual blog card
  const BlogCard = ({ blog }) => {
    const handleReadMore = () => {
      navigate(`/blog/${blog.id}`);
    };

    return (
      <Card
        sx={{
          maxWidth: 345,
          height: 400,  // Set a fixed height to maintain consistent size
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 3, // Add shadow on hover
          },
        }}
        onClick={handleReadMore}  // Make the entire card clickable
      >
        <CardMedia
          component="img"
          height="200"
          image={blog.image}  // Image from imported source
        />
        <CardContent sx={{ flexGrow: 1 }}>  {/* Ensure content area stretches to fill the space */}
          <Typography variant="h6" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.shortDescription}
          </Typography>
        </CardContent>
        <Button size="small" sx={{ alignSelf: 'flex-start', marginLeft: '12px' }}>
          Read More
        </Button>
      </Card>
    );
  };

  return (
    <Container sx={{ paddingTop: '40px', paddingBottom: '90px' }}>
      {/* Apply padding-top and padding-bottom to create space between content and navbar/footer */}
      <Typography variant="h4" gutterBottom>
      The Digital Journal
      </Typography>
<br></br>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
