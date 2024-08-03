// src/hooks/useDataFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adjust the base URL to point to your external API
        const response = await axios.get(`https://jsonplaceholder.typicode.com${url}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useDataFetch;