import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Blog from "./Components/Blog";
import BlogSingleview from "./Components/BlogSingleview";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Header from "./Components/Header";
import Home from "./Components/Home";

/**
 * ScrollToTop — scrolls the window to the top on every route change.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();

  // Header and Footer should NOT be shown on Login and Register pages
  const hideChrome =
    location.pathname === "/Login" ||
    location.pathname === "/Register";

  return (
    <div>
      <ScrollToTop />
      {!hideChrome && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogSingleview" element={<BlogSingleview />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        {/* Lowercase aliases to match links used in the nav and footer */}
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      {!hideChrome && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
