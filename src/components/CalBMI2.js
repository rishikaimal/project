import React, { useState } from "react";
import "./FirebaseDemo.css";

function FirebaseDemo() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    bmi: "",
  });

  const calculateBMI = () => {
    const weight = parseFloat(details.weight);
    const height = parseFloat(details.height);

    if (weight && height) {
      const bmi = weight / (height * height);
      setDetails({ ...details, bmi: bmi.toFixed(2) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, age, weight, height, gender, bmi } = details;

    const res = await fetch(
      "https://fitnessclubreact-default-rtdb.firebaseio.com/fitnessclub.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          age,
          weight,
          height,
          gender,
          bmi,
        }),
      }
    );
  };

  return (
    <div className="form">
      <input
        className="input-field"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      <input
        className="input-field"
        type="email"
        placeholder="Enter your email address"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter your phone number"
        onChange={(e) => setDetails({ ...details, phone: e.target.value })}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter your age"
        onChange={(e) => setDetails({ ...details, age: e.target.value })}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter your weight (in kg)"
        onChange={(e) => setDetails({ ...details, weight: e.target.value })}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter your height (in meters)"
        onChange={(e) => setDetails({ ...details, height: e.target.value })}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter your gender"
        onChange={(e) => setDetails({ ...details, gender: e.target.value })}
      />
      <button
        className="submit-button"
        onClick={() => {
          calculateBMI();
          handleSubmit();
        }}
      >
        Submit
      </button>
      {details.bmi && <p className="bmi-result">Your BMI: {details.bmi}</p>}
    </div>
  );
}

export default FirebaseDemo;
