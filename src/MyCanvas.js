import React from "react";
import domtoimage from "dom-to-image";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Link,
  Box
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { Dialog, DialogActions, Grid } from "@material-ui/core";

export const MyCanvas = ({ list, show, setShow }) => {
  const node = React.createRef();
  const [img, setImg] = React.useState();
  const { t } = useTranslation();

  const click = () => {
    console.log("click canvas", node.current);
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
      <Dialog fullScreen open={show} aria-labelledby="form-dialog-title">
        <div id="canvasId" ref={node}>
          <Card>
            <CardHeader title={t("title")} />
            <CardContent>
              <Grid container>
                {Object.keys(list).map((i) => (
                  <Grid
                    container
                    key={i}
                    spacing={1}
                    style={{ marginBottom: "5px" }}
                  >
                    <Grid item xs={4}>
                      <Box border={1} padding={1}>
                        {t(list[i].nome)}
                      </Box>
                    </Grid>

                    <Grid item xs={8}>
                      <Box border={1} padding={1}>
                        {list[i].valor}&nbsp;
                      </Box>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            <CardActions>{t("msgAuto")} https://inspirational.tk</CardActions>
          </Card>
        </div>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={click}>
            {t("copiar")}
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
            variant="button"
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
