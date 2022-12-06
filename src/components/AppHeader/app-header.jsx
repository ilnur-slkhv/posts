import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

import s from "./index.module.css";

const AppHeader = () => {
  return (
    <AppBar className={s.header} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Реактивные посты
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
