import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterCliente from './components/RegisterClient';
import RegisterTrabajador from './components/RegisterTrabajador'; // Asegúrate de tener este componente

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register-cliente" component={RegisterCliente} />
                <Route path="/register-trabajador" component={RegisterTrabajador} />
                {/* Otras rutas */}
            </Switch>
        </Router>
    );
};

export default App;
