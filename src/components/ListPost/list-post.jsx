import { Container } from "@mui/material";
import Post from "../Post/post";

const ListPost = ({ posts }) => {
  return (
    <>
      {posts.map((item) => (
        <Post key={item._id} {...item} />
      ))}
      <Post />
    </>
  );
};

export default ListPost;
