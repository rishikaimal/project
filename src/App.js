import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import HeroBanner from "./components/HeroBanner";
import CalBMI from "./components/CalBMI";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import FeedbackForm from "./components/FeedbackForm";

const App = () => (
  <Box sx={{ width: "100%", maxWidth: "1488px", m: "auto" }}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <CalBMI />
    <div
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "38%",
        position: "relative",
        marginBottom: "2rem", // Increase the gap by adding margin-bottom
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=139,%20CHARUSAT%20Campus,%20Highway,%20Off,%20Nadiad%20-%20Petlad%20Rd%20anand+(College)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
    <FeedbackForm />
    <Footer />
    <Chat />
  </Box>
);

export default App;
