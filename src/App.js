import "./styles.css";
import React from "react";
/* in ES 6 */
import domtoimage from "dom-to-image";

import {
  Button,
  Card,
  TextField,
  InputLabel,
  CardHeader,
  CardContent,
  CardActions,
  Link,
  Paper
} from "@material-ui/core";

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
  GridList
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import AlertDialog from "./AlertDialog";
const Carrocel = ({ list, setList }) => {
  const [current, setCurrent] = React.useState({ id: 1, item: list[1] });

  const onChange = (e) => {
    current.item = { ...current.item, valor: e.target.value };
    setCurrent({ ...current });
    list[current.id] = { ...list[current.id], valor: e.target.value };

    setList({ ...list });
  };
  return (
    <Card id="carrocelId" className="card">
      <CardHeader title="Minhas Inspirações" />

      <CardContent className="card-body">
        <InputLabel className="form-label">{current.item.nome}</InputLabel>
        <TextField
          className="form-control"
          onChange={(event) => onChange(event)}
          value={current.item.valor}
        />
      </CardContent>
      <CardActions>
        <Grid container justify="center" xs={12}>
          <Pagination
            count={Object.keys(list).length}
            variant="outlined"
            onChange={(event, value) =>
              setCurrent({ id: value, item: list[value] })
            }
            hideNextButton
            hidePrevButton
          />
        </Grid>
      </CardActions>
    </Card>
  );
};

const MyCanvas = ({ list, show, setShow }) => {
  const node = React.createRef();
  const [img, setImg] = React.useState();
  const click = () => {
    console.log(node.current);
    domtoimage
      .toPng(node.current)
      .then(async function (dataUrl) {
        window.copyToClipboard(dataUrl);

        setImg(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <div>
      <Dialog open={show} aria-labelledby="form-dialog-title">
        <div id="canvasId" ref={node}>
          <Card>
            <CardHeader title="Minhas Inspirações" />
            <CardContent>
              <Grid container spacing={1}>
                {Object.keys(list).map((i) => (
                  <Grid container spacing={3} key={i}>
                    <Grid item xs={4}>
                      {list[i].nome}
                    </Grid>

                    <Grid item xs={8}>
                      <Paper variant="outlined">{list[i].valor}&nbsp;</Paper>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            <CardActions>
              Gerado automaticamente com https://inspirational.tk
            </CardActions>
          </Card>
        </div>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={click}>
            Copiar para Clipboard
          </Button>
          <Link
            variant="outlined"
            color="primary"
            href={img}
            style={{ display: img ? "" : "none", marginLeft: "1em" }}
            target="_blank"
            rel="noreferrer"
            download
          >
            Download
          </Link>
          <Link
            variant="outlined"
            color="secondary"
            onClick={() => setShow(false)}
          >
            Close
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default function App() {
  const initial = {
    "1": { nome: "Guarda", valor: "" },
    "2": { nome: "Passagem", valor: "" },
    "3": { nome: "Pegada de costa", valor: "" },
    "4": { nome: "Queda", valor: "" },
    "5": { nome: "Raspagem", valor: "" },
    "6": { nome: "Finalização", valor: "" },
    "7": { nome: "Estratégia", valor: "" }
  };
  const [list, setList] = React.useState(initial);
  const [showView, setShowView] = React.useState(false);

  return (
    <div className="App">
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
