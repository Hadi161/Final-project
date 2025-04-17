'use client';
import { useState } from 'react';
export default function EventForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !date) return;
        onAdd({ title, date});
        setTitle('');
    };

    return(
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem'}}>
            <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginRight: '0.5rem'}}
            />

            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ marginRight: '0.5rem'}}
            />
            <button type="Submit">Add Event</button>
        </form>
    );
}