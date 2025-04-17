import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Contact(){
    return (
        <>
            <NavBar />
            <main style={{ padding: '1rem'}}>
                <h1>Contact Us</h1>
                <p>Email: support.eventsapp@gmail.com</p>
            </main>
            <Footer />
        </>
    )
}