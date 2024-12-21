import React from 'react';
import {
  CleaningServices,
  Security,
  DirectionsCar,
  Build,
  Restaurant,
  Construction,
  Checkroom
} from '@mui/icons-material';
import './component.css';
// Import images
import housekeepingImage from '../Assets/housekeeper.jpg'; // Adjust as necessary
import securityImage from '../Assets/security.jpg'; // Replace with actual image path
import driverImage from '../Assets/driver.jpg'; // Replace with actual image path
import helperImage from '../Assets/carpenter.jpg'; // Replace with actual image path
import chefImage from '../Assets/chef.jpg'; // Replace with actual image path
import buildingImage from '../Assets/builder.jpg'; // Replace with actual image path
import garmentsImage from '../Assets/tailor.jpg'; // Replace with actual image path

const sections = [
  {
    id: 1,
    title: "House Keeping",
    icon: <CleaningServices />,
    image: housekeepingImage,
    description: "Our housekeeping services ensure a clean and hygienic environment. With trained professionals, we cater to all your cleaning needs, from regular upkeep to deep cleaning services, tailored to both residential and commercial spaces. We use eco-friendly products to keep your home safe and healthy."
  },
  {
    id: 2,
    title: "Security",
    icon: <Security />,
    image: securityImage,
    description: "We provide reliable security personnel to safeguard your premises. Our trained guards are equipped to handle various security scenarios, ensuring safety and peace of mind for your home or business. Our security solutions are customizable to fit your specific needs, from event security to permanent installations."
  },
  {
    id: 3,
    title: "Driver",
    icon: <DirectionsCar />,
    image: driverImage,
    description: "Our skilled drivers offer safe and efficient transportation. Whether you need a driver for a special event, daily commutes, or logistics support, we ensure punctuality and professionalism at all times. Our drivers are knowledgeable about local routes and traffic conditions, ensuring you reach your destination smoothly."
  },
  {
    id: 4,
    title: "Helper Services",
    icon: <Build />,
    image: helperImage,
    description: "Our versatile helpers include skilled plumbers and carpenters, ready to assist with various tasks around your home. From repairs to installations, we have the expertise to get the job done right. No job is too small or too big, and we ensure a hassle-free experience with our friendly and professional team."
  },
  {
    id: 5,
    title: "Chef or Cook",
    icon: <Restaurant />,
    image: chefImage,
    description: "Enjoy delicious, home-cooked meals prepared by our professional chefs. We cater to your culinary preferences and dietary requirements, ensuring each meal is both nutritious and delightful. Our chefs specialize in various cuisines, and they are happy to customize meals for events or family gatherings."
  },
  {
    id: 6,
    title: "Building Works",
    icon: <Construction />,
    image: buildingImage,
    description: "Our team is skilled in all aspects of building works, from construction to renovations. We focus on quality and reliability, ensuring your projects are completed on time and to your satisfaction. Whether it's a small renovation or a large-scale construction, we manage every detail with precision and care."
  },
  {
    id: 7,
    title: "Garments",
    icon: <Checkroom />,
    image: garmentsImage,
    description: "We offer a wide range of garment services, including tailoring and alterations. Our skilled tailors ensure a perfect fit and quality craftsmanship for all your fashion needs. From bespoke clothing to quick alterations, we provide services tailored to your style and preference."
  }
];

const Services = () => {
    return (
      <div style={{ backgroundColor: 'black', color: 'white', padding: '20px 0' }}>
        {sections.map((section, index) => (
          <div 
          className={`service ${index % 2 === 0 ? 'even' : 'odd'}`}
            key={section.id} 
          >
            <img 
              src={section.image} 
              alt={section.title} 
              style={{
                width: '35%',
                borderRadius: '10px',
                margin: index % 2 === 0 ? '0 20px 0 0' : '0 0 0 20px'
              }} 
            />
            <div sx={{ width: '100%' }}>
              <h2 style={{ margin: '0 0 10px', display: 'flex', alignItems: 'center', color: '#ff00e6' }}> {/* Updated color */}
                {section.icon} 
                <span style={{ marginLeft: '8px' }}>{section.title}</span>
              </h2>
              <p style={{ margin: 0, fontSize: '1.2em' ,textAlign:'justify'}}>{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Services;