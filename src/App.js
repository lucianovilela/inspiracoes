import "./styles.css";
import React from "react";
/* in ES 6 */
import domtoimage from "dom-to-image";

const MyCanvas = ({ list }) => {
  const timer = React.useRef;
  const [hora, setHora] = React.useState(new Date());
  React.useEffect(() => {
    timer.current = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(timer.current);
  });

  return (
    <div id="canvas-id" className="card">
      <div className="card-header" style={{ marginTop: ".5em" }}>
        <h1>Minhas Inspirações</h1>
      </div>
      <div className="card-body">
        {list.map((item) => (
          <div className="row" style={{ margin: "0.5em" }} key={item.id}>
            <div className="col-4">
              <label className="form-label">{item.nome}</label>
            </div>
            <div className="col-8">
              <input name="texto" type="text" className="form-control" />
            </div>
          </div>
        ))}
      </div>
      <div className="card-footer">
        Gerado automaticamente com https://www.inspirational.tk
      </div>
    </div>
  );
};

const Toast = () => (
  <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src="..." className="rounded me-2" alt="..." />
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div className="toast-body">Hello, world! This is a toast message.</div>
  </div>
);

export default function App() {
  var node = React.useRef();
  const [img, setImg] = React.useState();
  const [list, setList] = React.useState([
    { id: 1, nome: "Guarda" },
    { id: 2, nome: "Passagem" },
    { id: 3, nome: "Pegada de costa" },
    { id: 4, nome: "Queda" },
    { id: 5, nome: "Raspagem" },
    { id: 6, nome: "Finalização" },
    { id: 7, nome: "Estratégia" }
  ]);
  React.useEffect(() => {
    node.current = document.getElementById("canvas-id");
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
