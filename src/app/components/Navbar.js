'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link href="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
      <Link href="/events" style={{ marginRight: '1rem', color: '#fff' }}>Events</Link>
      <Link href="/contact" style={{ color: '#fff' }}>Contact</Link>
    </nav>
  );
}

