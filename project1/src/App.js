import { useState } from "react";
import { Lists } from "./components/Lists";
import { Searcher } from "./components/Searcher";
import { Creator } from "./components/Creator";

function App() {
  // Siempre inicializar con []
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      <section id="content" className="content">
        <Lists listadoState={listadoState} setListadoState={setListadoState} />
      </section>

      <aside className="lateral">
        {/* IMPORTANTE: El buscador recibe ambos props */}
        <Searcher listadoState={listadoState} setListadoState={setListadoState} />
        <Creator setListadoState={setListadoState} />
      </aside>
    </div>
  );
}
export default App;