import React from "react";
import { Helmet } from "react-helmet";
import "./App.css"; // Add custom styles

const App = () => {
  return (
    <div className="container">
      {/* SEO Metadata */}
      <Helmet>
        <title>React Helmet POC | SEO Optimized</title>
        <meta
          name="description"
          content="An SEO-optimized React page using React Helmet."
        />
        <meta name="keywords" content="React, Helmet, SEO, Meta Tags" />
      </Helmet>

      {/* Navbar */}
      <nav className="navbar">
        <h1>React Helmet POC</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <h2>Enhance Your React SEO with React Helmet</h2>
        <p>
          Dynamically update your page title and meta tags for better SEO
          optimization.
        </p>
        <button className="btn">Learn More</button>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h3>About This Project</h3>
        <p>
          This project demonstrates how to use <strong>React Helmet</strong> to
          manage the document head in React applications. You can modify titles,
          meta descriptions, and more to improve your website's SEO.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 React Helmet POC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
