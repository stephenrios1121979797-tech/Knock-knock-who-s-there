export default function ManagerPage() {
  return (
    <main>
      <h1>Manager Dashboard</h1>

      <p>Activity by location (today)</p>

      <div style={{ marginTop: 20 }}>
        <h3>Main Office Area</h3>
        <ul>
          <li>Knocks: —</li>
          <li>Talks: —</li>
          <li>Walks: —</li>
        </ul>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>North Location</h3>
        <ul>
          <li>Knocks: —</li>
          <li>Talks: —</li>
          <li>Walks: —</li>
        </ul>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>South Location</h3>
        <ul>
          <li>Knocks: —</li>
          <li>Talks: —</li>
          <li>Walks: —</li>
        </ul>
      </div>

      <p style={{ marginTop: 30 }}>
        Locations will be color-coded based on recency.
      </p>
    </main>
  );
}
