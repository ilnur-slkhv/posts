import { Grid } from "@mui/material";
import Post from "../Post/post";

const ListPost = ({ posts }) => {
  return (
    <Grid container spacing={"20px"}>
      {posts.map((item) => (
        <Post key={item._id} {...item} />
      ))}
    </Grid>
  );
};

export default ListPost;
