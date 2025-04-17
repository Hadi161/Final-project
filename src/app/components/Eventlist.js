export default function EventList({ events }) {
    return (
        <ul>
            {events.map((event,idx) => (
                <li key={idx}>
                    <strong>{event.title}</strong> - {event.date}
                </li>
            ))}
        </ul>
    );
}