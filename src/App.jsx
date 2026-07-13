

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";

// Residential
import ResidentialPestControl from "./pages/ResidentialPestControl";
import ResidentialServiceDetail from "./pages/ResidentialServiceDetail";

// Commercial
import CommercialPestControl from "./pages/CommercialPestControl";
import CommercialServiceDetail from "./pages/CommercialServiceDetail";

// Blogs
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* Main Routes */}
        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/about-us" 
          element={<About />} 
        />

        <Route 
          path="/contact-us" 
          element={<Contact />} 
        />

        <Route 
          path="/faqs" 
          element={<FAQs />} 
        />


        {/* Residential Pest Control */}

        <Route 
          path="/residential-pest-control"
          element={<ResidentialPestControl />}
        />

        <Route 
          path="/residential-pest-control/:slug"
          element={<ResidentialServiceDetail />}
        />


        {/* Commercial Pest Control */}

        <Route 
          path="/commercial-pest-control"
          element={<CommercialPestControl />}
        />

        <Route 
          path="/commercial-pest-control/:slug"
          element={<CommercialServiceDetail />}
        />


        {/* Blogs */}

        <Route 
          path="/blogs"
          element={<Blogs />}
        />

        <Route 
          path="/blogs/:slug"
          element={<BlogDetail />}
        />


      </Routes>

      <Footer />

    </>
  );
}

export default App;