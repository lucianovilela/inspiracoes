import "./styles.css";
import React from "react";
/* in ES 6 */
import domtoimage from "dom-to-image";

const Carrocel = ({ list, setList }) => {
  const onChange = (e, i) => {
    list[i] = { ...list[i], valor: e.target.value };

    setList({ ...list });
  };
  return (
    <div id="carrocelId" className="card">
      <div className="card-title">
        <h1>Minhas Inspirações</h1>
      </div>
      <div className="card-body">
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-fade"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            {Object.keys(list).map((i, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={i}
              >
                <div>
                  <label className="form-label">{list[i].nome}</label>
                </div>
                <div>
                  <input
                    name="texto"
                    type="text"
                    className="form-control"
                    value={list[i].valor}
                    onChange={(event) => onChange(event, i)}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const MyCanvas = ({ list }) => {
  return (
    <div id="canvasId" className="card invisible">
      <div className="card-title">
        <h1>Minhas Inspirações</h1>
      </div>
      <div className="card-body">
        {Object.keys(list).map((i) => (
          <div className="row" style={{ margin: "0.5em" }} key={i}>
            <div className="col-4">
              <label className="form-label">{list[i].nome}</label>
            </div>
            <div className="col-8">
              <div className="alert alert-primary" role="alert">
                {list[i].valor}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-footer">
        Gerado automaticamente com https://inspirational.tk
      </div>
    </div>
  );
};

export default function App() {
  var node = React.useRef();
  const [img, setImg] = React.useState();
  const [list, setList] = React.useState({
    "1": { nome: "Guarda", valor: "" },
    "2": { nome: "Passagem", valor: "" },
    "3": { nome: "Pegada de costa", valor: "" },
    "4": { nome: "Queda", valor: "" },
    "5": { nome: "Raspagem", valor: "" },
    "6": { nome: "Finalização", valor: "" },
    "7": { nome: "Estratégia", valor: "" }
  });
  React.useEffect(() => {
    node.current = document.getElementById("canvasId");
  });

  const click = () => {
    domtoimage
      .toPng(node.current)
      .then(async function (dataUrl) {
        //let url = await window.saveArquivo(dataUrl);
        window.copyToClipboard(dataUrl);

        //console.log(url);
        setImg(dataUrl);
        //var img = new Image();
        //img.src = dataUrl;
        //document.body.appendChild(img);
        alert("imagem copiada");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="App">
      <Carrocel list={list} setList={setList} />
      <MyCanvas list={list} />
      <div>
        <button className="btn btn-primary" onClick={click}>
          Cópia para clipboard
        </button>
        <a
          className="btn btn-primary"
          href={img}
          style={{ display: img ? "" : "none", marginLeft: "1em" }}
          target="_blank"
          rel="noreferrer"
          download
        >
          Download
        </a>
      </div>

      <div className="fixed-bottom">inspirational.tk</div>
    </div>
  );
}
