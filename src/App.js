import { useEffect, useState } from "react";


export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.github.com/users/OtavioFilipe/repos');
      const data = await response.json();
      setRepositories(data);
    })();
  },[]);

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  ); 
}