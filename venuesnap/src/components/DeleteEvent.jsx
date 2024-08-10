import React from "react";
import axiosInstance from "../api/axiosInstance";

const refreshPage = () => {
  window.location.reload();
};

const DeleteEvent = ({ eventId }) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/events/${eventId}`);
      refreshPage();
    } catch (err) {
      console.error(err);
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