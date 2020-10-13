import { useCallback, useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data };
};

export default useFetch;
