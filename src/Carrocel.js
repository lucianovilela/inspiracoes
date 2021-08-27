import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  TextField,
  InputLabel,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { MyCanvas } from "./MyCanvas";

export const Carrocel = ({  list, setList }) => {
  const { t } = useTranslation();

  const [current, setCurrent] = React.useState({ id: 1, item: list[1] });
  const [showView, setShowView] = React.useState(false);

  const onChange = (e) => {
    current.item = { ...current.item, valor: e.target.value };
    setCurrent({ ...current });
    list[current.id] = { ...list[current.id], valor: e.target.value };

    setList({ ...list });
  };
  return (
    <>
      <Card id="carrocelId" className="card">
        <CardContent className="card-body">
          <InputLabel className="form-label">{t(current.item.nome)}</InputLabel>
          <TextField
            style={{ width: "80%" }}
            onChange={(event) => onChange(event)}
            value={current.item.valor}
          />
        </CardContent>
        <CardActions>
          <Grid container justify="center">
            <Pagination
              count={Object.keys(list).length}
              variant="outlined"
              onChange={(event, value) =>
                setCurrent({ id: value, item: list[value] })
              }
              hidePrevButton
            />
          </Grid>
        </CardActions>
      </Card>
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
          onClick={() => setList(list)}
        >
          Reset
        </Button>
        {<MyCanvas list={list} show={showView} setShow={setShowView} />}
      </div>
    </>
  );
};
