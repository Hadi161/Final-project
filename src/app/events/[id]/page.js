export default function EventDetails({ params }) {
    const { id } = params;
  
    return (
      <main style={{ padding: '1rem' }}>
        <h1>Event Details</h1>
        <p>Event ID: {id}</p>
        <p>More information will be added in Phase 3.</p>
      </main>
    );
  }
  