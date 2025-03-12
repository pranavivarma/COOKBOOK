import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import "./styles.css";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/recipes">Recipes</Link></li>
      <li><Link to="/communities">Communities</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li> {/* Add Dashboard link */}
    </ul>
  </nav>
);

const Home = () => (
  <div className="home-container">
    <header>
      <h1>𝐂𝐎𝐎𝐊𝐁𝐎𝐎𝐊</h1>
      <Navbar />
    </header>
    <main>
      <section className="hero">
        <h2>Discover Authentic Recipes</h2>
        <Link to="/recipes" className="btn">Explore Recipes</Link>
      </section>
    </main>
  </div>
);

const Dashboard = () => (
  <div className="dashboard-container">
    <header>
      <h1>Dashboard</h1>
      <Navbar />
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

const Recipes = () => (
  <div className="recipes-container">
    <h2>Recipes List</h2>
    <ul>
      <li>Recipe 1</li>
      <li>Recipe 2</li>
      <li>Recipe 3</li>
    </ul>
  </div>
);

const Communities = () => (
  <div className="communities-container">
    <h2>Communities</h2>
    <p>Join food lovers and share your recipes.</p>
  </div>
);

const Profile = () => (
  <div className="profile-container">
    <h1>Your Profile</h1>
    <p>Welcome to your profile! Manage your account details here.</p>
    <p>Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access more features.</p>
  </div>
);

const Login = () => (
  <div className="auth-container">
    <h2>Login</h2>
    <form>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <Link to="/register">Register</Link></p>
  </div>
);

const Register = () => (
  <div className="auth-container">
    <h2>Register</h2>
    <form>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="text" placeholder="Username" required /> {/* New input field for Username */}
      <input type="tel" placeholder="Phone Number" required /> {/* New input field for Phone Number */}
      <input type="text" placeholder="Address" required /> {/* New input field for Address */}
      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <Link to="/login">Login</Link></p>
  </div>
);
const Footer = () => (
  <footer>
    <p>&copy; 2025 Cookbook. All rights reserved.</p>
  </footer>
);

const App = () => {
  const location = useLocation();
  const hideFooterOnPages = ["/profile", "/login", "/register", "/recipes", "/communities"];
  const shouldShowFooter = !hideFooterOnPages.includes(location.pathname);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
