import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const DeleteEvent = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!id) {
      alert("Event ID is missing!");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/events/${id}`);
      alert("Event deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event: " + error.message);
    }
  };


  return (
    <button
      onClick={handleDelete}
      style={{ borderRadius: "4px", border: "none" }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};

export default DeleteEvent;
