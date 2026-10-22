
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Products from "./Components/Services";

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
import ProjectsPage from "./Components/Projects";

function Layout() {
  const location = useLocation();

  // Header should NOT be shown on Login and Register pages
  const hideHeader =
    location.pathname === "/Login" ||
    location.pathname === "/Register";

  return (
    <div>
      {!hideHeader && <Header />}

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
        <Route path="/Products" element={<Products />} />
        <Route path="/Projects" element={<ProjectsPage />} /> 
      </Routes>

      {!hideHeader && <Footer />}
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

