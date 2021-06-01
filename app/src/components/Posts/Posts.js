const Posts = ({ posts }) => {
  if (!posts.length) return null;

  return (
    <div>
        {posts.map((post) => {
          return (
            <pre>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </pre>
          )
        })}
    </div>
  )
}

export default Posts;
