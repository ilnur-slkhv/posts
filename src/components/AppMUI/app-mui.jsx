import { Container } from "@mui/material";
import AppHeader from "../AppHeader/app-header";
import ListPost from "../ListPost/list-post";
import { postData } from "./posts";

const AppMUI = () => {
  return (
    <>
      <AppHeader />
      <Container>
        <ListPost posts={postData} />
      </Container>
    </>
  );
};

export default AppMUI;
