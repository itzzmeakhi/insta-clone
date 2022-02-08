import Post from "../Post/Post";

const posts = [
  {
    id: '1234',
    username: 'itzzmeakhi',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Subscribe and Destroy the like button'
  },
  {
    id: '1234',
    username: 'itzzmeakhi',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Subscribe and Destroy the like button'
  }
]

const Posts = () => {
  return (
    <div>
      {posts.map(({ id, ...otherProps}) => (
        <Post key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default Posts;