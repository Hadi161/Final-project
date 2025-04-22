"use client";

import React, { Suspense } from "react";

const Eventlist = React.lazy(() => import("../components/Eventlist"));

export default function EventsPage() {
  const sampleEvents = [
    { id: "1", title: "Event 1", date: "2025-05-10" },
    { id: "2", title: "Event 2", date: "2025-05-15" },
  ];

  return (
    <main style={{ padding: "1rem" }}>
      <h1>All Events</h1>
      <Suspense fallback={<p>Loading Event List...</p>}>
        <Eventlist events={sampleEvents} />
      </Suspense>
    </main>
  );
}


