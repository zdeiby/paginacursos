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
import { Config } from './Config';
import { Profile } from './Profile';
import { AprendeJavascript } from './Cursos/javascript/Javascript';
import { Servicios } from './Servicios';
import { FormServices } from './FormServices';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
    <Router>
        <DataProvider>
           <AuthProvider> 
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<App/>} ></Route>
                <Route path='/login' element={ <Login/>} ></Route>
                <Route path='/register' element={ <Register/>} ></Route>
                <Route path='/software' element={ <Software/>} ></Route>
                <Route path='/admin' element={<AdminSend></AdminSend>} ></Route> 
                <Route path='/aprende' element={ <Aprende/>} ></Route>
                <Route path='/servicios' element={<Servicios/>}></Route>
                <Route path='/paginacursos' element={<App/>} ></Route>
                <Route path='/servicios/:slug' element={<FormServices></FormServices>}></Route>
                <Route path='/aprende/cursos/sql' element={ <AprendeJavascript slug='sql'  url='DFg1V-rO6Pg' title='Curso de SQL completo' title1='Parte 1' title2='Parte 2' title3='Parte 3' title4='Parte 4' title5='Parte 5' title6='Parte 6' title7='Parte 7' title8='Parte 8' title9='Fin'/>} ></Route>
                <Route path='/aprende/cursos/javascript' element={ <AprendeJavascript slug='JavaScript'  url='z95mZVUcJ-E' title='Curso de Javascript JUNIOR' title1='Parte 1'  title2='Parte 2' title3='Parte 3' title4='Parte 4' title5='Parte 5' title6='Parte 6' title7='Parte 7' title8='Parte 8' title9='Fin'/>} ></Route>
                <Route path='/aprende/cursos/css' element={ <AprendeJavascript  slug='CSS' url='OWKXEJN67FE' title='Curso de CSS completo' title1='Parte 1' title2='Parte 2' title3='Parte 3' title4='Parte 4' title5='Parte 5' title6='Parte 6' title7='Parte 7' title8='Parte 8' title9='Fin'/>} ></Route>
                <Route path='/aprende/cursos/html' element={ <AprendeJavascript slug='HTML'  url='kN1XP-Bef7w' title='Curso de HTML completo' title1='Parte 1' title2='Parte 2' title3='Parte 3' title4='Parte 4' title5='Parte 5' title6='Parte 6' title7='Parte 7' title8='Parte 8' title9='Fin'/>} ></Route>
                <Route path='/aprende/cursos/bootstrap' element={ <AprendeJavascript slug='Bootstrap'  url='QCw0L6FupQ0' title='Curso de BOOTSTRAP 5 completo' title1='Parte 1' title2='Parte 2' title3='Parte 3' title4='Parte 4' title5='Parte 5' title6='Parte 6' title7='Parte 7' title8='Parte 8' title9='Fin'/>} ></Route>
                <Route path='/perfil' element={ <Profile/>} ></Route>
                <Route path='/profile/:slug' element={ <Config/>} ></Route>
                <Route path='/aprende/cursos' element={ <Cursos/>} ></Route>
                <Route path='/aprende/articulos' element={<BlogPage/>} ></Route>
                <Route path='aprende/articulos/:id/:slug' element={<BlogPost/>} ></Route>
                 
                <Route path='*' element={ <NotFound/>} ></Route>
            </Routes>    </AuthProvider> </DataProvider>
            <Footer></Footer>
      
        </Router>
    </React.Fragment>
);

