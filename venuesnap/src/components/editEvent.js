import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import axiosInstance from "../api/axiosInstance";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: event, error, loading } = useFetchData(`/events/${id}`);
  const [formData, setFormData] = useState({
    eventName: "",
    venueId: "",
    date: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        eventName: event.eventName || "",
        venueId: event.venueId || "",
        date: event.date || "",
        imageUrl: event.imageUrl || "",
      });
    }
  }, [event]);

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

    try {
      await axiosInstance.put(`/events/${id}`, formData, {
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
          value={formData.imageUrl}
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