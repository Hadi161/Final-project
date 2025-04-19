import EventCard from './EventCard';

export default function EventList({ events }) {
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}


