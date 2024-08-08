import axios from "axios";
import React, { useState } from "react";

const AddEventForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [venueID, setVenueID] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!eventName || !eventDate || !venueID || !imageUrl || !location) {
            alert('Please fill in all fields');
            return;
        }

        const newEvent = { eventName, eventDate, venueID, imageUrl, location };

        try {
            await axios.post('http://localhost:3000/event', newEvent);
            alert('Event added successfully');
        } catch (error) {
            console.error('There was an error adding this event!', error);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageUrl(URL.createObjectURL(file));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Event Name:
                <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            </label>
            <label>
                Event Date:
                <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </label>
            <label>
                Venue ID:
                <input type="number" value={venueID} onChange={(e) => setVenueID(e.target.value)} />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <label>
                Image:
                <input type="file" onChange={handleImageUpload}  />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddEventForm;