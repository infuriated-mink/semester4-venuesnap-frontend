import React, { useState } from 'react';
import AddEventForm from './AddEventForm';

const AddButton = () => {
    const [showForm, setShowForm] = useState(false);

    const handleAddClick = () => {
        setShowForm(true);
    };

    return (
        <div>
            <button onClick={handleAddClick}>Add</button>
            {showForm && <AddEventForm />}
        </div>
    );
};

export default AddButton;