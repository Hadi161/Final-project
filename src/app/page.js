"use client";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventForm from './components/EventForm';
import Eventlist from './components/Eventlist';

export default function Home() {
  const [events, setEvents] = useState ([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };


  return(
    <>
      <Navbar />
      <main style={{ padding: '1rem'}}>
        <h1>Event Manager</h1>
        <EventForm onAdd={addEvent} />
        <Eventlist events={events} />
      </main>
      <Footer />
    </>
  );
}