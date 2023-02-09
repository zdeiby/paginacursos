import React from 'react';
import './App.css';
import { Nav } from '../Componentes/Nav';
import { Header } from '../Componentes/Header';
import { UsedBy } from '../Componentes/UsedBy'; 
import { Carrousel } from '../Componentes/Carrousel';
import { AprendeContainer } from '../Componentes/AprendeContainer';
import { ColorCard } from '../Componentes/ColorCard';
import { Form } from '../Componentes/Form/index';
import { Subscribe } from '../Componentes/Subscribe';
import { Footer } from '../Componentes/Footer';


function AppUI(){
    return(
        <React.Fragment>
        <Nav></Nav>
        <Header></Header>
        <div className='div'></div>
        <Carrousel></Carrousel>
        <UsedBy></UsedBy>
        <AprendeContainer></AprendeContainer>
     
        <section>
            <div className="container py-5">
                <div className="mx-auto estilo">
                    <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">   
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='secondary' name='HTML' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard>
                    <ColorCard color='info' name='CSS' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard>
    
                </div>
                </div>
                </div>
        </section>
        <Form></Form>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </React.Fragment>
    )
}

export {AppUI}