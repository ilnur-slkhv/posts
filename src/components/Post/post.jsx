import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, ExpandMore } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useState } from "react";
// import { styled } from "@mui/material/styles";

const ExpandMoreStyled = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));

const Post = ({ image, title, author = {}, text, created_at }) => {
  const { email, avatar } = author;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar src={avatar && avatar} aria-label="recipe">
              {email?.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          title={author.email}
          subheader={created_at}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={`Изображение ${title}`}
        />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" noWrap color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <ExpandMoreStyled
            expand={expanded}
            onClick={handleExpandClick}
            aria-label="show more"
          >
            <ExpandMore />
          </ExpandMoreStyled>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{text}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Post;
