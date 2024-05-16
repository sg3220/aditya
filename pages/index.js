import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [category, setCategory] = useState('topstories');

  useEffect(() => {
    const fetchStories = async () => {
      const response = await axios.get(`/api/${category}`);
      setStories(response.data.stories);
    };

    fetchStories();
  }, [category]);

  return (
    <div>
      <h1>Hacker News Stories</h1>
      <nav>
        <button onClick={() => setCategory('topstories')}>Top Stories</button>
        <button onClick={() => setCategory('beststories')}>Best Stories</button>
        <button onClick={() => setCategory('newstories')}>New Stories</button>
      </nav>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
            <p>By {story.by} | Score: {story.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
