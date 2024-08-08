import React from "react";
import DeleteEvent from "../components/DeleteEvent";
import useFetchData from "../hooks/useFetchData";

const LandingPage = () => {
  const { data: events, error, loading } = useFetchData("/events");

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error.message}</p>;

  return (
    <div>
      <h1>Events</h1>
      {events && events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.eventName}</h2>
              <p>{event.venueId}</p>
              <p>Date: {event.date}</p>
              <img src={event.image} alt={event.eventName} />
              <DeleteEvent id={event.eventId} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default LandingPage;
