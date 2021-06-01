import { useState } from 'react';
import usePostList from './Hooks/usePostsList';
import Posts from './components/Posts';
import './App.css';

function App() {
  const [selectedPost, setSelectedPost] = useState(1);
  const [postsList, loading, error] = usePostList(selectedPost);
  const updateSelectedPost = (e) => setSelectedPost(e.target.value);

  const renderPosts = () => {
    return (
      <>
        {loading && <div>loading...</div>}
        {error && <div>show error here</div>}
        {postsList && <Posts posts={postsList} />}
      </>
    )
  }

  return (
    <div className="App">
      <select onChange={updateSelectedPost}>
        <option value={1}>post1</option>
        <option value={2}>post2</option>
        <option value={3}>post3</option>
      </select>
      {renderPosts()}
    </div>
  );
}

export default App;
