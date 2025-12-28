import { useState } from "react";
import { Creator } from "./components/Creator";
import { Lists } from "./components/Lists";
import { Searcher } from "./components/Searcher";



function App() {

    const[listadoState, setListadoState] = useState([]);

  return (
     <div className="layout">
      
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

      
        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

       
        <section id="content" className="content">

         <Lists listadoState={listadoState} setListadoState={setListadoState}/>

        </section>

     
        <aside classNameName="lateral">
          
            <Searcher />
            <Creator setListadoState={setListadoState} />
        </aside>

       
        <footer className="footer">
            &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>

    </div>

  );
}

export default App;
