import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home';
import Seccion from './pages/Seccion';
import Favoritos from './pages/Favoritos';
import Detalle from './pages/Detalle';
import Resultados from './pages/Resultados';
import Error404 from './components/Error404/Error404';


function App() {
  return (
    <Router>
      
      <Navbar />

      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Section/:id" component={Seccion} />
          <Route path="/Favoritos" component={Favoritos} />
          <Route path="/Resultados" component={Resultados} />
          <Route path="/Detalle/:id/:section" component={Detalle} />
          <Route component={Error404} />
        </Switch>
      </main>
      <footer className = "footer">
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