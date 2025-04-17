export default function EventList({ events }) {
    return (
      <ul>
        {events.map((event, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            <strong>{event.title}</strong> – {event.date}
          </li>
        ))}
      </ul>
    );
  }
  