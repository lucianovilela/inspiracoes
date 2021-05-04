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
    <div id="my-node">
      <div>
        <h1>Minhas Inspirações</h1>
      </div>
      {list.map((item) => (
        <div className="row" style={{ marginBottom: "0.5em" }} key={item.id}>
          <div className="col-4">
            <label className="form-label">{item.nome}</label>
          </div>
          <div className="col-8">
            <input name="texto" type="text" className="form-control" />
          </div>
        </div>
      ))}
    </div>
  );
};

const Toast=()=>(
  <>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
</>
);


export default function App() {
  var node = React.useRef();
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
    node.current = document.getElementById("my-node");
  });

  const click = () => {
    domtoimage
      .toPng(node.current)
      .then(async function (dataUrl) {
        //let url = await window.saveArquivo(dataUrl);
        window.copyToClipboard(dataUrl);
        //console.log(url);
        //setImg(url);
        //var img = new Image();
        //img.src = dataUrl;
        //document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="App">
      <MyCanvas list={list} />
      <p>
        <button className="btn btn-primary" onClick={click}>
          Salva clipboard
        </button>
      </p>
    </div>
  );
}
