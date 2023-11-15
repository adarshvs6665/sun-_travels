import "./App.css";

import { useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import { Loader } from "./Pages/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import NavbarStyle from "./Components/NavbarStyle";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return (
    // <BrowserRouter>
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <Navbar />
            {/* <NavbarStyle/> */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </div>
        </>
      )}
    </>

    // </BrowserRouter>
  );
}

export default App;
