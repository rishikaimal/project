import React, { useState } from "react";
import "./FeedbackForm.css";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBf4bov9Xj9Eh1JgDJGaXiiL8yxdE02OIA",
  authDomain: "fitnessclubreact.firebaseapp.com",
  databaseURL: "https://fitnessclubreact-default-rtdb.firebaseio.com",
  projectId: "fitnessclubreact",
  storageBucket: "fitnessclubreact.appspot.com",
  messagingSenderId: "714598518954",
  appId: "1:714598518954:web:e92e463300e1bf932800d3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [profession, setProfession] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the form data to Firebase Realtime Database
    const formData = {
      name: name,
      email: email,
      comments: comments,
      profession: profession,
      ageGroup: ageGroup,
      city: city,
      state: state,
    };

    const feedbackRef = database.ref("fitnessclub"); // Reference to the 'fitnessclub' location
    feedbackRef
      .push(formData)
      .then(() => {
        // Data saved successfully
        console.log("Feedback submitted successfully!");

        // Reset the form fields
        setName("");
        setEmail("");
        setComments("");
        setProfession("");
        setAgeGroup("");
        setCity("");
        setState("");

        // Show success alert to the user
        window.alert("Feedback submitted successfully!");
      })
      .catch((error) => {
        // Error occurred while saving data
        console.error("Error submitting feedback:", error);

        // Show error alert to the user
        window.alert("Error submitting feedback. Please try again later.");
      });
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments/Reviews:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="profession">Profession:</label>
          <select
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          >
            <option value="">Select Profession</option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="self-employed">Self-Employed</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ageGroup">Age Group:</label>
          <select
            id="ageGroup"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            required
          >
            <option value="">Select Age Group</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46+">46+</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
