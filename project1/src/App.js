import { useState } from "react";
import { Lists } from "./components/Lists";
import { Searcher } from "./components/Searcher";
import { Creator } from "./components/Creator";

function App() {
  // Siempre inicializar con []
  const [listadoState, setListadoState] = useState([]);

  return (

  
    <div className="layout">
      <header className="header">
        <div className="logo"></div>
        <h1 id="Title-Portfolio">Movie Marckes Portfolio</h1>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">My List</a></li>
        </ul>
      </nav>

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