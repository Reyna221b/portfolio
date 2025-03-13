import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css'; // Create this file if it doesn't exist
import '../styles/ProjectCard.css';

const Projects = () => {
  const projects = [
    {
      title: 'Easy-Shop',
      description: 'Contributed to the development of Easy Shop, an online store powered by a Spring Boot API and MySQL database. Focused on fixing bugs and enhancing features, ensuring seamless user authentication, category browsing, and filtering functionality. Primarily worked on improving and optimizing APIs.',
      image: '/images/ES.png',
      link: 'https://github.com/Reyna221b/easy-shop',
    },
    {
      title: 'Neighborhood Library',
      description: 'A backend project for a free community library with a collection of 20 books. Users can browse available books, check them out, and return them, with the system keeping track of who has borrowed and returned each book',
      image: '/images/NL.png',
      link: 'https://github.com/Reyna221b/neighborhood-library',
    },
    {
      title: 'Personal Accounting ledger',
      description: 'A financial tracking application that records deposits, payments, and categorized savings. It generates detailed reports, displaying transaction history with date, time, description, vendor name, and amount for better financial management.',
      image: '/images/ALP.png',
      link: 'https://github.com/Reyna221b/AccountingLedger',
    },
    {
      title: 'DELI-cious POS System',
      description: 'A Point of Sales (POS) application for DELI-cious, a custom sandwich shop. Customers can order sandwiches, drinks, and chips while customizing their sandwiches with various options like size, bread type, toppings, and toasting. The system guides users through the ordering process, calculates the total cost, and allows order verification before completion. Order details are saved as a receipt file, organized by date and time.',
      image: '/images/orderdetails.jpg',
      link: 'https://github.com/Reyna221b/deli-sandwiches',
    },
    {
      title: 'Car Dealership System',
      description: 'A Java-based application that simulates a car dealership, allowing users to search for vehicles based on various criteria, add new inventory, and remove existing vehicles. The system ensures data persistence by reading from and saving to a CSV file.',
      image: '/images/CDP.png', 
      link: 'https://github.com/Reyna221b/car-dealership',
    },
    {
      title: 'Team Car Dealership - Sales & Leasing Extension',
      description: 'An extension of the original console-based Car Dealership application, written in Java. This update introduces a Sales and Leasing feature, allowing users to sell or lease vehicles. The system collects sales information, records transactions, differentiates between sales and leases, and calculates pricing accordingly.',
      image: '/images/TCD.png', 
      link: 'https://github.com/Reyna221b/team-car-dealership',
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
