const events = [
  {
    id: "1",
    title: "Event 1",
    date: "2025-05-10",
    description: "This is a description for Event 1.",
    location: "Humber North Campus",
    organizer: "Humber Tech Club",
  },
  {
    id: "2",
    title: "Event 2",
    date: "2025-05-15",
    description: "This is a description for Event 2.",
    location: "Toronto Downtown",
    organizer: "Startup Toronto",
  },
];

export default function EventDetails({ params }) {
  const { id } = params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <main style={{ padding: "1rem" }}>
        <h1>Event Not Found</h1>
        <p>Sorry, we couldn't find the event you're looking for.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h1>{event.title}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Organizer:</strong> {event.organizer}</p>
    </main>
  );
}

  