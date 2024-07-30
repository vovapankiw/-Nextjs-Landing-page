import Post from '../Post';

export default function PostList() {
  return (
    <div className="flex flex-wrap gap-6">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
