import Eventlist from '../components/Eventlist';

export default function EventsPage() {
  const sampleEvents = [
    { id: '1', title: 'Tech Expo', date: '2025-05-10' },
    { id: '2', title: 'Startup Pitch Night', date: '2025-05-15' },
  ];

  return (
    <main>
      <h1>All Events</h1>
      <Eventlist events={sampleEvents} />
    </main>
  );
}
