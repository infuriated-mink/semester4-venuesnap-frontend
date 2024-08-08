import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import axiosInstance from "../api/axiosInstance";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
<<<<<<< HEAD
  const { data: event, error, loading } = useFetchData(`/events/${id}`);
  
=======
  const { data: event, error, loading } = useFetchData(`/event/${id}`);
>>>>>>> c327d4a13407ffe2b7319f37584a7b341427cf46
  const [formData, setFormData] = useState({
    eventName: "",
    venueId: "",
    date: "",
    image: "",
  });

  // Populate formData when event data is fetched
  useEffect(() => {
    if (event) {
      setFormData({
        eventName: event.eventName || "",
        venueId: event.venueId || "",
        date: event.date || "",
<<<<<<< HEAD
        imageUrl: event.image || "", // Ensure image is correctly mapped
=======
        imageUrl: event.image || "",
>>>>>>> c327d4a13407ffe2b7319f37584a7b341427cf46
      });
    }
  }, [event]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the form before submission
  const validateForm = () => {
    const { venueId, date, imageUrl } = formData;
    const venueIdValid = venueId >= 1 && venueId <= 10;
    const dateValid = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date);
    const imageUrlValid = imageUrl.trim() !== ""; // Check that imageUrl is not empty
    return venueIdValid && dateValid && imageUrlValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Invalid input. Please check venueId, date format, and image URL.");
      return;
    }

    try {
<<<<<<< HEAD
      // Update the event using PUT request
      await axiosInstance.put(`/events/${id}`, formData, {
=======
      await axiosInstance.put(`/event/${id}`, formData, {
>>>>>>> c327d4a13407ffe2b7319f37584a7b341427cf46
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Event updated successfully!");
      navigate("/");
    } catch (error) {
      alert("Error updating event: " + error.message);
    }
  };

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error loading event: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Event</h2>
      
      <label>
        Event Name:
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleInputChange}
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
        />
      </label>
      <br />
      
      <label>
        Image URL:
        <input
          type="text"
          name="imageUrl"
          value={formData.image}
          onChange={handleInputChange}
        />
      </label>
      <br />
      
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate("/")}>
        Cancel
      </button>
    </form>
  );
};

export default EditEvent;
