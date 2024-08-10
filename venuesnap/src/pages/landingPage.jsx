import React from "react";
import { Link } from "react-router-dom"; 
import DeleteEvent from "../components/DeleteEvent";
import useFetchData from "../hooks/useFetchData";
import { useState } from "react";
import Header from "../components/Header";
import "../css/LandingPage.css";
import addButton from "../media/add.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  const { data: events, error, loading } = useFetchData("/events");
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error.message}</p>;

  // Filter events based on the search query
  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search events"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <h1>Events</h1>
      <div>
        {filteredEvents && filteredEvents.length > 0 ? (
          <ul className="picFlex">
            <Link to="/add">
              <button className="addButton">
                <img src={addButton} alt="add button" />
              </button>
            </Link>
            {filteredEvents.map((event) => (
              <div key={event.id}>
                <div className="pictureContainer">
                  <div
                    style={{
                      background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url(${event.image})`,
                      fontSize: "12px",
                      color: "white",
                      height: "175px",
                      width: "215px",
                      backgroundSize: "100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="editDelete">
                      <Link to={`/edit/${event.eventId}`}>
                        <button style={{ borderRadius: "6px", border: "none" }}>
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                      </Link>
                      <DeleteEvent id={event.eventId} />
                    </div>
                    <div className="textDiv">
                      <p>{event.eventName}</p>
                      <p>{event.venueId}</p>
                      <p>Date: {event.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <p>No events found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
