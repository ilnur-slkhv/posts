import { Container } from "@mui/material";
import AppHeader from "../AppHeader/app-header";
import ListPost from "../ListPost/list-post";
import { postData } from "./posts";
import AppFooter from "../AppFooter/app-footer";

const AppMUI = () => {
  return (
    <>
      <AppHeader />
      <Container>
        <ListPost posts={postData} />
      </Container>
      <AppFooter />
    </>
  );
};

export default AppMUI;
