"use client";

import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const EventForm = React.lazy(() => import("./components/EventForm"));
const EventList = React.lazy(() => import("./components/Eventlist"));

export default function Home() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <h1>Event Manager</h1>

        <Suspense fallback={<p>Loading Event Form...</p>}>
          <EventForm onAdd={addEvent} />
        </Suspense>

        <Suspense fallback={<p>Loading Event List...</p>}>
          <EventList events={events} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

