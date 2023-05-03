import React from 'react';
import './App.css';
import { Nav } from '../Componentes/Nav/index.js';
import { Header } from '../Componentes/Header/index.js';
import { UsedBy } from '../Componentes/UsedBy/index.js'; 
import { Carrousel } from '../Componentes/Carrousel/index.js';
import { AprendeContainer } from '../Componentes/AprendeContainer/index.js';
import { ColorCard } from '../Componentes/ColorCard/index.js';
import { Form } from '../Componentes/Form/index.js';
import { Subscribe } from '../Componentes/Subscribe/index.js';
import { Footer } from '../Componentes/Footer/index.js';
import { Link } from 'react-router-dom';



function AppUI(){
    return(     <React.Fragment> 
        
     
        <Header></Header>
        <div className='div'></div>
        <Carrousel></Carrousel>
        <UsedBy></UsedBy>
        <AprendeContainer></AprendeContainer>
    

        <section>
            <div className="container py-5 ">
                <div className="mx-auto estilo">
                    <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">   
                    <Link to='/aprende/cursos'>  <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard></Link>
                    <Link to='/aprende/cursos'>  <ColorCard color='secondary' name='HTML' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard></Link>
                   <Link to='/aprende/cursos'> <ColorCard color='info' name='CSS' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard></Link>
    
                </div>
                </div>
                </div>
        </section>
        <Form title='Podemos resolver tus dudas'></Form>
        <Subscribe></Subscribe>
      </React.Fragment>
    )
}

export {AppUI}