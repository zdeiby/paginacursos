import React from "react";
import { Container } from "react-bootstrap";
import { ColorCard } from "../Componentes/ColorCard";
import { Footer } from "../Componentes/Footer";
import { Nav } from "../Componentes/Nav";

function Aprende(){
    return(
        <>
        <Nav></Nav>
        <div className="bg-dark">
            <Container className="pt-5 pb-5">
            <section>
            <div className="container py-5">
                <div className="mx-auto estilo">
                    <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">   
                    <ColorCard color='primary' name='Crear repositorio en Github' text='Prepárate para crear un repositorio en github para que puedas subir tus proyectos, click en leer más para ver el documento' url='artículos/1/cómo-crear-un-repositorio-de-github/'></ColorCard>
                    <ColorCard color='secondary' name='HTML' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard>
                    <ColorCard color='info' name='CSS' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard>
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='secondary' name='HTML' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard>
                    <ColorCard color='info' name='CSS' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard>
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='secondary' name='HTML' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard>
                    <ColorCard color='info' name='CSS' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard>
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='secondary' name='HTML' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard>
                    <ColorCard color='info' name='CSS' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard>
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>

                </div>
                </div>
                </div>
        </section>
            </Container>
        </div>
        <Footer></Footer>
        </>
    )
}

export {Aprende}


