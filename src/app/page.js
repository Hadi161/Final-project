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
      <NavBar />
      <main style={{ padding: '1rem'}}>
        <h1>Event Manager</h1>
        <EventForm onAdd={addEvent} />
        <EventList events={events} />
      </main>
      <Footer />
    </>
  );
}