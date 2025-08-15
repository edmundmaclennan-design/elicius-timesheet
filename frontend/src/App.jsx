import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Timesheet</h1>
      <h2>Projects</h2>
      <ul>
        {projects.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
