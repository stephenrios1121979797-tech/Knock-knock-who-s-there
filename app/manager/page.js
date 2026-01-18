export default function ManagerPage() {
  return (
    <main>
      <h1>Manager Dashboard</h1>

      <p>Territory status</p>

      <div style={{ marginTop: 20, background: "#d1fae5", padding: 10 }}>
        <h3>Main Office Area</h3>
        <p>Last worked: Today</p>
        <p>Status: 🟢 Fresh</p>
      </div>

      <div style={{ marginTop: 20, background: "#fef3c7", padding: 10 }}>
        <h3>North Location</h3>
        <p>Last worked: 5 days ago</p>
        <p>Status: 🟡 Aging</p>
      </div>

      <div style={{ marginTop: 20, background: "#fee2e2", padding: 10 }}>
        <h3>South Location</h3>
        <p>Last worked: 14 days ago</p>
        <p>Status: 🔴 Stale</p>
      </div>

      <p style={{ marginTop: 30 }}>
        Territories change color based on how long it’s been since last activity.
      </p>
    </main>
  );
}
