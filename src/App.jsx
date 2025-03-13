import React from 'react';
import './App.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <header>
      <h1>Dashboard</h1>
    </header>
    <main>
      <h2>Welcome to Your Dashboard</h2>
      <p>Here you can view your saved recipes, track your progress, and engage with the community.</p>
      <section className="dashboard-section">
        <h3>Your Saved Recipes</h3>
        <ul>
          <li>Recipe 1</li>
          <li>Recipe 2</li>
          <li>Recipe 3</li>
        </ul>
      </section>
      <section className="dashboard-section">
        <h3>Community Updates</h3>
        <p>Stay connected with the latest updates from the food community.</p>
      </section>
    </main>
  </div>
);

export default Dashboard;