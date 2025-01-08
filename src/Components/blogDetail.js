import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import blogOneImage from '../Assets/blogOne.jpg'; 

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title:
        "Discover the Ultimate Solution for All Your Driver Needs with Boom Recruiter App",
      image: blogOneImage,
      shortDescription: "This is a short description of the blog post...",
      content: `
      Finding a reliable driver can be a real challenge, whether for personal trips or business operations. But what if there was a way to simplify the process and get connected to skilled, verified drivers instantly? That’s where the Boom Recruiter app comes in, making driver recruitment easier, faster, and more reliable than ever.

      Why Boom Recruiter App?

      We understand how frustrating it can be to search for the right driver, especially when you're in a hurry. With Boom Recruiter App, you’ll never have to deal with that stress again. Here's why you should choose us:

      - Quick and Easy: Need a driver right now? With Boom Recruiter Application, you can easily find professional, verified drivers in just a few taps. It’s that simple.
      - Flexible Options: Whether you need a driver for one day, a week, or a long-term arrangement, we’ve got you covered. From temporary to permanent hires, we provide the flexibility you need.
      - Bulk Recruitment: Are you a business looking to hire multiple drivers? Boom Recruiter app offers customized bulk driver solutions, tailored to meet the unique needs of your organization. Say goodbye to the hassle of managing multiple recruitment processes.
      - Verified Drivers: All the drivers on our platform are fully verified, ensuring that they meet our strict standards for professionalism, reliability, and safety. You can trust Boom Recruiter to provide top-quality drivers for every journey.

      The Boom Recruiter Application Advantage

      - No More Stress: Don’t waste time scrolling through countless ads or calling around for drivers. With the Boom Recruiter app, you can find the right driver, right when you need them.
      - Professional and Reliable: All drivers on our platform are thoroughly vetted and verified, giving you peace of mind every time you book a driver.
      - Tailored to Your Needs: Whether you're an individual needing a one-time driver or a business requiring a fleet of professionals, Boom Recruiter has solutions that fit all types of needs.

      How Boom Recruiter Works

      Using the app is simple. Download it, enter your preferences, and get matched with verified drivers who meet your requirements. It’s that easy!

      Don’t Wait—Download the Boom Recruiter App Today! Experience the convenience, reliability, and peace of mind that Boom Recruiter brings to your driver search.
      `,
    },
    {
      id: 2,
      title: "Blog Post 2",
      image: "/assets/blog-image.jpg",
      shortDescription: "Stay tuned !!!",
      content: "This is the detailed content for blog post 2. More information goes here...",
    },
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <Typography variant="h6" style={{ color: "white" }}>Blog not found!</Typography>;
  }

  return (
    <Container style={{ backgroundColor: "black" }}>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", height: "50%", marginBottom: "16px" }}
      />
      <Typography variant="h3" gutterBottom style={{ color: "white" }}>
        {blog.title}
      </Typography>

      <Box sx={{ marginBottom: "16px" }}>
        {blog.content.split("\n").map((line, index) => {
          if (line.startsWith("###")) {
            return (
              <Typography key={index} variant="h5" paragraph style={{ color: "white" }}>
                {line.replace("###", "").trim()}
              </Typography>
            );
          } else if (line.startsWith("-")) {
            return (
              <Typography key={index} variant="body1" paragraph style={{ color: "white" }}>
                {line.trim()}
              </Typography>
            );
          } else {
            return (
              <Typography key={index} variant="body1" paragraph style={{ color: "white" }}>
                {line}
              </Typography>
            );
          }
        })}
      </Box>
    </Container>
  );
};

export default BlogDetail;
