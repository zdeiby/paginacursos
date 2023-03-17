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
import { NotFound } from './NotFound/Index';
import { BlogPage } from './Menu/BlogPage';
import { BlogPost } from './Menu/BlogPost';
import { Nav } from './Componentes/Nav';
import { Footer } from './Componentes/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
    <Router>
        <AuthProvider>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<App/>} ></Route>
                <Route path='/login' element={ <Login/>} ></Route>
                <Route path='/register' element={ <Register/>} ></Route>
                <Route path='/software' element={ <Software/>} ></Route>
                <Route path='/aprende' element={ <Aprende/>} ></Route>
                <Route path='/aprende/artículos/1/cómo-crear-un-repositorio-de-github/' element={ <Git/>} ></Route>
                <Route path='/aprende/articulos' element={<BlogPage/>} ></Route>
                <Route path='aprende/articulos/:id/:slug' element={<BlogPost/>} ></Route>
                <Route path='*' element={ <NotFound/>} ></Route>
            </Routes>
            <Footer></Footer>
        </AuthProvider>
        </Router>
    </React.Fragment>
);

