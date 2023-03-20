import React from "react";
import { Container } from "react-bootstrap";
import { ColorCard } from "../Componentes/ColorCard";


function Cursos(){
    return(
        <>
        <div className="bg-dark">
            <Container className="pt-5 pb-5">
            <section>
            <div className="container ">
                <div className="mx-auto estilo">
                    <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">   
                    <ColorCard color='primary' name='JavaScript' text='Revisa todos los cursos que tenemos para ti, recuerda que no tienen costo y puedes escribir al contacto si necesitas ayuda' url='cursos'></ColorCard>
                    <ColorCard color='secondary' name='HTML' text='Revisa toda la documentacion, articulos escritos de cada leguage, con sus respectivas imagenes' url='articulos'></ColorCard>
                    <ColorCard color='info' name='CSS' text='Mira todos los servicios que tenemos para ti, si necesitas asesoria para tu proyectos, click en leer más'></ColorCard>
                    <ColorCard color='primary' name='Bootstrap' text='Revisa todos los productos que tenemos en disponibles que podrian ser de utilidad en nuestra pagina web, click en leer mas'></ColorCard>
                     <ColorCard color='primary' name='React' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='secondary' name='Node' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard>
                    <ColorCard color='info' name='Python' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard>
                    <ColorCard color='primary' name='Django' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='primary' name='Flask' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='secondary' name='Java' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard>
                    <ColorCard color='info' name='SpringBoot' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard>
                    <ColorCard color='primary' name='Angular' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='primary' name='MySql' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
                    <ColorCard color='secondary' name='MongoDB' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página'></ColorCard>
                    <ColorCard color='info' name='Plesk' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad'></ColorCard>
                    <ColorCard color='primary' name='Servidores' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>

                </div>
                </div>
                </div>
        </section>
            </Container>
        </div>
   
        </>
    )
}

export {Cursos}

