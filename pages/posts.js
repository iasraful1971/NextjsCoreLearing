import Post from "../components/post";

function Posts({ posts }) {
  console.log(posts);
  return (
    <>
      <h1>List of Posts {posts.length} </h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Post post={post} />
          </div>
        );
      })}
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
