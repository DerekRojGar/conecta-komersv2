import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterCliente from './components/RegisterClient';
import RegisterTrabajador from './components/RegisterTrabajador'; // Asegúrate de tener este componente
import CompleteProfile from './components/CompleteProfile'; // Asegúrate de tener este componente
import MapComponent from './components/MapComponent';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register-cliente" component={RegisterCliente} />
                <Route path="/register-trabajador" component={RegisterTrabajador} />
                <Route path="/complete-profile" component={CompleteProfile} />
                <Route path="/map-component" component={MapComponent} />
                {/* Otras rutas */}
            </Switch>
        </Router>
    );
};

export default App;
