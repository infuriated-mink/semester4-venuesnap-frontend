import React from "react";
import axiosInstance from "../api/axiosInstance";

const DeleteEvent = ({ eventId }) => {
  const handleDelete = async () => {
    if (!eventId) {
      alert("Event ID is missing!");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/events/${eventId}`);
      alert("Event deleted successfully!");
      window.location.reload(); 
    } catch (err) {
      console.error("Error deleting event:", err);
      alert("Failed to delete event: " + err.message);
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ borderRadius: "4px", border: "none", cursor: "pointer" }}
    >
      <i className="fas fa-trash-alt"></i> 
    </button>
  );
};

export default DeleteEvent;