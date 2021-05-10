import React from "react";
import domtoimage from "dom-to-image";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Link,
  Paper
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { Dialog, DialogActions, Grid } from "@material-ui/core";

export const MyCanvas = ({ list, show, setShow }) => {
  const node = React.createRef();
  const [img, setImg] = React.useState();
  const { t } = useTranslation();

  const click = () => {
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
                      {t(list[i].nome)}
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
            variant="button"
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
