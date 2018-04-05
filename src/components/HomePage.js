import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about-page.scss';

// Since this component is simple and static, there's no parent container for it.
const HomePage = () => {
  return (
    <div className="container">
      <h2 className="alt-header">Home</h2>
    </div>
  );
};

export default HomePage;
