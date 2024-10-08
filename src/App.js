import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Detalle from './pages/Detalle';
import Resultados from './pages/Resultados';
import Error404 from './components/Error404/Error404';
import Populares from './pages/Populares';
import Cartelera from './pages/Cartelera';


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
          <Route path="/Favoritos" component={Favoritos} />
          <Route path="/Detalle/:id" component={Detalle} />
          <Route path="/Populares" component={Populares} />
          <Route path="/Cartelera" component={Cartelera} />
          <Route path="/search" component={Resultados} />
          <Route component={Error404} />
          
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