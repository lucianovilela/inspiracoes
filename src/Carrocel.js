import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  TextField,
  InputLabel,
  CardContent,
  CardActions
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

export const Carrocel = ({ list, setList }) => {
  const { t, i18n } = useTranslation();

  const [current, setCurrent] = React.useState({ id: 1, item: list[1] });

  const onChange = (e) => {
    current.item = { ...current.item, valor: e.target.value };
    setCurrent({ ...current });
    list[current.id] = { ...list[current.id], valor: e.target.value };

    setList({ ...list });
  };
  return (
    <Card id="carrocelId" className="card">
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
