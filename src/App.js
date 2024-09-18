import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home';
import Seccion from './pages/Seccion';
import Favoritos from './pages/Favoritos';
import Detalle from './pages/Detalle';
import Resultados from './pages/Resultados';
import Error404 from './components/Error404/Error404';
import ResultadosBusqueda from './components/ResultadosBusqueda/ResultadosBusqueda';
import Populares from './pages/Populares';


function App() {
  return (
    <Router>

      <header className='header'>
        <img src='/img/WHEELWISE.png' alt='logo' className='logo'/>
        <Navbar />
      </header>

      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Section/:id" component={Seccion} />
          <Route path="/Favoritos" component={Favoritos} />
          <Route path="/Resultados" component={Resultados} />
          <Route path="/Detalle/:id" component={Detalle} />
          <Route path="/Populares" component={Populares} />

          
          <Route component={Error404} />
          <Route path="/search" component={Resultados} />
        </Switch>
      </main>
      <footer className="footer">
        <ul>
          <li>Gregorio Bonardi</li>
          <li>Bautista Juarez</li>
          <li>Nicolas Crespo</li>
        </ul>
      </footer>
    </Router>
  );
}

export default App;