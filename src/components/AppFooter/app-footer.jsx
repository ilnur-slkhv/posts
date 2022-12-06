import { AppBar, Toolbar, Typography } from "@mui/material";

import s from "./index.module.css";

const AppHeader = () => {
  return (
    <AppBar className={s.footer} position="static">
      <Toolbar>
        <Typography variant="inherit" component="div">
          © Создан Максимом, 2022 г.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
