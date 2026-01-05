import { useState, useEffect, useCallback } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const fetchUsers = useCallback(async () => {
    if (!hasMore) return;
    try {
      setIsLoading(true);
      const userData = await fetch(url);
      if (!userData.ok) {
        throw new Error();
      }
      const response = await userData.json();
      if (response.length < options.limit) {
        setHasMore(false);
      }
      setData((prev) => [...prev, ...response]);
    } catch (error) {
      setError("Unable to load data");
    } finally {
      setIsLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return { isLoading, error, data, hasMore };
};

export default useFetch;
