import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Preloader from "./Components/Preloader";
import { Banner } from "./ui/Banner";
// import About from "./Pages/About";  // New About Page
// import Contact from "./Pages/Contact";  // New Contact Page
// import NotFound from "./Pages/NotFound";  // 404 Page
// import Message from "./ui/Message";

const App = () => {
  const [loading, setLoading] = useState(true);
  const[showBanner,setShowBanner] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowBanner(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);


  useEffect(()=>{
    if(showBanner){
      const bannerTimer = setTimeout(()=>{
        setShowBanner(false);
      },2400);

      return () => clearTimeout(bannerTimer)
    }
  },[showBanner]);

  return (
    <BrowserRouter>
      {/* Show Preloader while content is loading */}
      {loading ? (
        <Preloader />
      ) : (
        <>

          {/* Navbar remains persistent across all routes */}
          <Navbar />
          {showBanner && <Banner/>}
          <div className="min-h-screen"> {/* Main content area */}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>

          {/* Footer remains persistent across all routes */}
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
