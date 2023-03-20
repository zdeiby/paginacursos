import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Index/App.js';
import { Login } from './Login/index.js';
import { Register } from './Register/index.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Login/peticion.js';
import { Software } from './Software/Index';
import {Aprende} from './Aprende/Aprende'
import { NotFound } from './NotFound/Index';
import { BlogPage } from './Menu/BlogPage';
import { BlogPost } from './Menu/BlogPost';
import { Nav } from './Componentes/Nav';
import { Footer } from './Componentes/Footer';
import { AdminSend } from './Admin';
import { DataProvider } from './Menu/BlogData';
import { Cursos } from './Cursos/Cursos';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
    <Router>
        <AuthProvider> <DataProvider>
           
            <Nav></Nav> 
            <Routes>
                <Route path='/' element={<App/>} ></Route>
                <Route path='/login' element={ <Login/>} ></Route>
                <Route path='/register' element={ <Register/>} ></Route>
                <Route path='/software' element={ <Software/>} ></Route>
                <Route path='/admin' element={<AdminSend></AdminSend>} ></Route> 
                <Route path='/aprende' element={ <Aprende/>} ></Route>
                <Route path='/aprende/cursos' element={ <Cursos/>} ></Route>
                
                <Route path='/aprende/articulos' element={<BlogPage/>} ></Route>
                <Route path='aprende/articulos/:id/:slug' element={<BlogPost/>} ></Route>
                 
                <Route path='*' element={ <NotFound/>} ></Route>
            </Routes>   </DataProvider>
            <Footer></Footer>
        </AuthProvider>
        </Router>
    </React.Fragment>
);

