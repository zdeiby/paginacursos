import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Index/App.js';
import { Login } from './Login/index.js';
import { Register } from './Register/index.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Login/peticion.js';
import { Software } from './Software/Index';
import { Git } from './Aprende/Git/Git';
import {Aprende} from './Aprende/Aprende'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
    <Router>
        <AuthProvider>
            <Routes>
                <Route path='/' element={<App/>} ></Route>
                <Route path='/login' element={ <Login/>} ></Route>
                <Route path='/register' element={ <Register/>} ></Route>
                <Route path='/software' element={ <Software/>} ></Route>
                <Route path='/aprende' element={ <Aprende/>} ></Route>
                <Route path='/aprende/artículos/1/cómo-crear-un-repositorio-de-github/' element={ <Git/>} ></Route>
            </Routes>
        </AuthProvider>
        </Router>
    </React.Fragment>
);

