import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male"); // added state for gender
  const [bmi, setBmi] = useState("");
  const [bmiCategory, setBmiCategory] = useState(""); // added state for BMI category

  const validateEmail = (value) => {
    // regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePhone = (value) => {
    // regular expression for phone number validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value);
  };

  const validateNumber = (value) => {
    // regular expression for number validation
    const numberRegex = /^\d+$/;
    return numberRegex.test(value);
  };

  const calculateBmi = () => {
    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(1);
    setBmi(bmiValue);

    let category = "";
    if (bmiValue < 18.5) {
      category = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = "Normal weight";
    } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
      category = "Overweight";
    } else if (bmiValue >= 30.0 && bmiValue <= 34.9) {
      category = "Obesity Class I";
    } else if (bmiValue >= 35.0 && bmiValue <= 39.9) {
      category = "Obesity Class II";
    } else if (bmiValue >= 40) {
      category = "Obesity Class III";
    }

    setBmiCategory(category);

    console.log({
      name,
      email,
      phone,
      age,
      weight,
      height,
      gender,
      bmi: bmiValue,
      bmiCategory: category,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        p: 4,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ maxWidth: "400px" }}>
        Calculate BMI
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ maxWidth: "1000px" }}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!validateEmail(email)}
          helperText={
            !validateEmail(email) && "Please enter a valid email address"
          }
          sx={{ maxWidth: "1000px" }}
        />
        <TextField
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!validatePhone(phone)}
          helperText={
            !validatePhone(phone) && "Please enter a 10-digit phone number"
          }
          sx={{ maxWidth: "1000px" }}
        />
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          error={!validateNumber(age)}
          helperText={!validateNumber(age) && "Please enter a valid age"}
          sx={{ maxWidth: "1000px" }}
        />
        <TextField
          label="Weight (in kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          error={!validateNumber(weight)}
          helperText={!validateNumber(weight) && "Please enter a valid weight"}
          sx={{ maxWidth: "1000px" }}
        />
        <TextField
          label="Height (in cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          error={!validateNumber(height)}
          helperText={!validateNumber(height) && "Please enter a valid height"}
          sx={{ maxWidth: "1000px" }}
        />
        <Select
          labelId="gender-label"
          id="gender"
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
          sx={{ maxWidth: "1000px" }}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>

        <Button
          variant="contained"
          onClick={calculateBmi}
          sx={{ maxWidth: "1000px" }}
        >
          Calculate BMI
        </Button>
        {bmi && (
          <Typography>
            Your BMI is {bmi}. You are {bmiCategory}. You can use this
            information to assess your health risks. Talk to out ChatAgent to
            know about your diet plan.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContactUs;
