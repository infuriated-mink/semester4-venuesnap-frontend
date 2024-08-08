import React from "react";
import axiosInstance from "../api/axiosInstance";

const refreshPage = () => {
  window.location.reload();
};

const DeleteEvent = ({ id }) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/event/${id}`);
      refreshPage();
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteEvent;
