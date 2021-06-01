import { useState, useEffect } from 'react';

const localCache = {};

const usePostList = (post) => {
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!post) {
      setPostsList([]);
    } else if (localCache[post]) {
      setPostsList(localCache[post])
    } else {
      requestPosts();
    }

    async function requestPosts() {
      try {
        setLoading(true);
        setPostsList([]);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${post}`);
        const json = await res.json();
        localCache[post] = json || [];
        setPostsList(localCache[post]);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false)
      }
    }
  }, [post])

  return [postsList, loading, error]
}

export default usePostList;