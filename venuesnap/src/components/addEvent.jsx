import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Add.css";

const AddEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    venueId: "",
    date: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { venueId, date } = formData;
    const venueIdValid = venueId >= 1 && venueId <= 10;
    const dateValid = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date);
    return venueIdValid && dateValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Invalid input. Please check venueId and date format.");
      return;
    }

    const eventData = {
      eventName: formData.eventName,
      venueId: parseInt(formData.venueId, 10),
      date: formData.date,
      image: formData.image, // Ensure this matches the backend field
    };

    try {
      await axiosInstance.post("/events", eventData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Event added successfully!");
      navigate("/");
    } catch (error) {
      alert("Error adding event: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Header />
      <div className="pinkLine"></div>
      <h2>Add Event</h2>
      <div className="addMain">
        <div className="labelDiv">
          <label>
            Event Name:
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              required
            />
          </label>

          <br />
          <label>
            Venue ID (1-10):
            <input
              type="number"
              name="venueId"
              value={formData.venueId}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Date (MM/DD/YYYY):
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </div>

      <Footer />
    </form>
  );
};

export default AddEvent;
