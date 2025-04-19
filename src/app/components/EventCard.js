import Link from 'next/link';
import styles from '../styles/EventCard.module.css'; 

export default function EventCard({ event }) {
  return (
    <div className={styles.card}>
      <Link href={`/events/${event.id}`}>
        <strong>{event.title}</strong> - {event.date}
      </Link>
    </div>
  );
}

