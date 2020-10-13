import { useEffect } from 'react';
import { useState } from 'react';
import useFetch from './useFetch';
export const useFindOne = (url, id) => {
  const { data } = useFetch(url);
  const [item, setItem] = useState(undefined);
  useEffect(() => {
    setItem(data.find((i) => i.id === parseInt(id)));
  }, [id, data]);
  return { item };
};
