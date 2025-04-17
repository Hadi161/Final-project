'use client';
import Link from 'next/link';
export default function NavBar(){
    return (
        <nav style={{padding: '1rem', background: '#333', color: '#fff'}}>
        <Link href="/" style= {{marginRight: '1rem', color: '#fff'}}>Home</Link>
        <Link href="/contact" style= {{color: '#fff'}}>Contact</Link>
</nav>
    );
}