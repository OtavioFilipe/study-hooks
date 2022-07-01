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

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `You have ${filtered.length} favorites`;
  },[repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo;
    });
    setRepositories(newRepositories);
  }

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(Favorited)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favorite</button>
        </li>
      ))}
    </ul>
  ); 
}