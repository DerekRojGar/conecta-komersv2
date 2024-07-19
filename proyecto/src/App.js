// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterCliente from './components/RegisterClient';
import RegisterTrabajador from './components/RegisterTrabajador';
import CompleteProfile from './components/CompleteProfile';
import MapComponent from './components/MapComponent'; // Importa el componente de mapa
import Homepage from './components/Homepage';
import Inicopage from './components/Iniciopage';
import Contactopage from './components/Contactopage';
import Serviciospage from './components/Serviciospage';
import TyC from './components/TyC';
import Bienvenida from './components/Bienvenida';


const App = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/home-page" component={Homepage} />
                <Route path="/register-cliente" component={RegisterCliente} />
                <Route path="/register-trabajador" component={RegisterTrabajador} />
                <Route path="/complete-profile" component={CompleteProfile} />
                <Route path="/map" component={MapComponent} /> {/* Añade una nueva ruta para el mapa */}
                <Route path="/register-trabajador" component={RegisterTrabajador} />
                <Route path="/inicio-page" component={Inicopage} />
                <Route path="/contacto-page" component={Contactopage} />
                <Route path="/servicios-page" component={Serviciospage} />
                <Route path="/term-y-serv" component={TyC} />
                <Route path="/bienvenida" component={Bienvenida} />
                {/* Otras rutas */}
            </Switch>
        </Router>
    );
};

export default App;
