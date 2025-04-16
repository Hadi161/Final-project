'use client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to the Event App</h1>
      <p>Discover upcoming events and connect with us.</p>
      <button onClick={() => router.push('/events')}>
        View Events
      </button>
    </div>
  );
}
