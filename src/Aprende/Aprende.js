import React from "react";
import { Container } from "react-bootstrap";
import { Link , useNavigate } from "react-router-dom";
import { ColorCard } from "../Componentes/ColorCard";


function Aprende(){
    const navigate = useNavigate()
    let datos=false
   try{
      datos= JSON.parse( localStorage.getItem("date")).email
   }catch{
       
   }
    return(
        <>
        {datos?
        <>
        <div className="bg-dark">
            <Container className="pt-5 pb-5">
            <section>
            <div className="container ">
                <div className="mx-auto estilo">
                    <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">   
                   <Link to='/aprende/cursos'> <ColorCard color='primary' name='Cursos' text='Revisa todos los cursos que tenemos para ti, recuerda que no tienen costo, para los cursos debes estar REGISTRADO' url='cursos'></ColorCard></Link>
                   <Link to='/aprende/articulos'> <ColorCard color='secondary' name='Articulos' text='Revisa toda la documentacion, articulos escritos de cada leguage, con sus respectivas imagenes, los articulos estan libres' url='articulos'></ColorCard></Link>
                   <Link to='/servicios'> <ColorCard color='info' name='servicios' text='Mira todos los servicios que tenemos para ti, si necesitas asesoria para tu proyectos, click en leer más'></ColorCard></Link>
                  {/*    <ColorCard color='primary' name='productos' text='Revisa todos los productos que tenemos en disponibles que podrian ser de utilidad en nuestra pagina web, click en leer mas'></ColorCard>
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
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>*/}

                </div>
                </div>
                </div>
        </section>
            </Container>
        </div>
   
        </>: <>
        <div className="bg-dark">
            <Container className="pt-5 pb-5">
            <section>
            <div className="container ">
                <div className="mx-auto estilo">
                    <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">   
                   <Link to='/login'> <ColorCard nombre=' inicia sesión para acceder 🔒' color='primary' name='Cursos' text='Revisa todos los cursos que tenemos para ti, recuerda que no tienen costo, para los cursos debes estar REGISTRADO' url='cursos'></ColorCard></Link>
                   <Link to='/aprende/articulos'> <ColorCard color='secondary' name='Articulos' text='Revisa toda la documentacion, articulos escritos de cada leguage, con sus respectivas imagenes, los articulos estan libres' url='articulos'></ColorCard></Link>
                    <ColorCard color='info' name='servicios' text='Mira todos los servicios que tenemos para ti, si necesitas asesoria para tu proyectos, click en leer más'></ColorCard>
                    <ColorCard color='primary' name='productos' text='Revisa todos los productos que tenemos en disponibles que podrian ser de utilidad en nuestra pagina web, click en leer mas'></ColorCard>
                  {/*  <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
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
                    <ColorCard color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>*/}

                </div>
                </div>
                </div>
        </section>
            </Container>
        </div>
   
        </>}
        </>
    )
}

export {Aprende}


