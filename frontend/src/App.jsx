import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Features from "./components/Features";
import Aid from "./components/Aid";
import BookingPage from "./components/Booking";
import PeerSupportPage from "./components/peer";
import AdminDashboardPage from "./components/Admin";
import ResourcesPage from "./components/resource";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Render Navbar only on home page */}
      {isHomePage && <Navbar />}

      {/* Render HeroSection only on home page */}
      {isHomePage && <HeroSection />}

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/aid" element={<Aid />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/peer-support" element={<PeerSupportPage />} />
        <Route path="/dashboard" element={<AdminDashboardPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* add other routes here */}
      </Routes>

      {/* Render Footer only on home page */}
      {isHomePage && <Footer />}
    </>
  );
}

export default App;
