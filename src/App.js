import "./styles.css";
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Button,
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import { Language } from "@material-ui/icons";

import AlertDialog from "./AlertDialog";

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

  const { t, i18n } = useTranslation();
  const initial = {
    "1": { nome: t("guarda"), valor: "" },
    "2": { nome: t("passagem"), valor: "" },
    "3": { nome: t("costas"), valor: "" },
    "4": { nome: t("queda"), valor: "" },
    "5": { nome: t("raspagem"), valor: "" },
    "6": { nome: t("finalizacao"), valor: "" },
    "7": { nome: t("estrategia"), valor: "" }
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
          onClick={() => setShowView(true)}
        >
          Visualizar
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
      <div className="fixed-bottom">inspirational.tk</div>
    </div>
  );
}
