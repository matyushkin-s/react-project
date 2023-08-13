import { useEffect, useState } from 'react'
import ListItem from '../components/ListItem';

const url = 'https://jsonplaceholder.typicode.com/posts';

const Articles = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(url);

        if (!response.ok) {
          setItems([]);
          throw new Error("Failed to load data");
        }

        const data = await response.json();
        // slice to show only 20 items
        setItems(data.slice(0, 20));
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getItems();
  }, []);

  return (
    <ul className='list'>
      {error && <h1>{error}</h1>}

      {isLoading && <h1>is loading...</h1>}

      {items && items.map(i => 
        <ListItem key={i.id} data={i} />
      )}
    </ul>
  )
}

export default Articles;