import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const DeleteEvent = ({ eventId }) => {
  const navigate = useNavigate();

  // Function to handle the delete action
  const handleDelete = async () => {
    console.log("Attempting to delete event with ID:", eventId);

    // Check if eventId is provided
    if (!eventId) {
      alert("Event ID is missing!");
      return;
    }

    // Confirm with the user before proceeding
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      // Make the DELETE request to the server
      await axiosInstance.delete(`/events/${eventId}`);
      alert("Event deleted successfully!");
      
      // Navigate back to the home page after deletion
      navigate("/");
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event: " + error.message);
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ borderRadius: "4px", border: "none", backgroundColor: "transparent", cursor: "pointer" }}
    >
      <i className="fas fa-trash-alt"></i> 
    </button>
  );
};

DeleteEvent.propTypes = {
  eventId: PropTypes.number.isRequired,
};

export default DeleteEvent;
