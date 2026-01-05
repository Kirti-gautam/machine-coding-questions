import { useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";

const limit = 50;

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const loadingRef = useRef(null);
  const { isLoading, error, data, hasMore } = useFetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
    {
      limit,
    }
  );

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    };
    const observer = new IntersectionObserver(handleIntersect);

    if (loadingRef.current) observer.observe(loadingRef.current);
    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  if (isLoading && data.length === 0) {
    return <p>Loading...</p>;
  }
  if (error && error.length > 0) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="container">
      {data && data.length > 0 ? (
        <ol id="content">
          {data.map((user, i) => (
            <li key={user.id + i}>{user.title}</li>
          ))}
          {hasMore && <li ref={loadingRef}>loading...</li>}
        </ol>
      ) : (
        <p>No content...</p>
      )}
    </div>
  );
};

export default InfiniteScroll;
