import "./styles.css";
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Button,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import { Language } from "@material-ui/icons";

import Menu from "./Menu";
import { Carrocel } from "./Carrocel";
import { MyCanvas } from "./MyCanvas";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
export default function App() {
  const classes = useStyles();

  const { t } = useTranslation();
  const initial = {
    "1": { nome: "guarda", valor: "" },
    "2": { nome: "passagem", valor: "" },
    "3": { nome: "costas", valor: "" },
    "4": { nome: "queda", valor: "" },
    "5": { nome: "raspagem", valor: "" },
    "6": { nome: "finalizacao", valor: "" },
    "7": { nome: "estrategia", valor: "" }
  };
  const [list, setList] = React.useState(initial);
  const [showView, setShowView] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {t("title")}
          </Typography>
          <IconButton
            color="inherit"
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
          >
            <Language />
          </IconButton>
          <Menu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Toolbar>
      </AppBar>
      <Carrocel list={list} setList={setList} />
      <div>
        <Button
          variant="outlined"
          color="primary"
          style={{ margin: "0.5em" }}
          onClick={() => {
            window.firebase.analytics().logEvent("view", {
              content_type: "view"
            });
            setShowView(true);
          }}
        >
          {t("visualizar")}
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setList(initial)}
        >
          Reset
        </Button>
      </div>
      {/*<div>{JSON.stringify(list)}</div>*/}
      {<MyCanvas list={list} show={showView} setShow={setShowView} />}
      <div className="fixed-bottom">
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
          inspirational.tk
        </Box>
      </div>
    </div>
  );
}
