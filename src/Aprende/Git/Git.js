import React from "react";
import { Nav } from "../../Componentes/Nav";
import { Footer } from "../../Componentes/Footer";
import { Container } from "react-bootstrap";
import img1 from "../../assets/img/aprende/artículos/1.png"
import img2 from "../../assets/img/aprende/artículos/2.png"
import './Git.css'

function Git(){
    return(
        < >
        <Nav></Nav>
    
        <div className="bg-dark pt-3">
        <Container className="text-center pt-5 bg-dark"> 
           <h3 className="text-success"> 31 de enero del 2023</h3>
           <h1> Cómo crear un repositorio de GitHub para cargar código por Git</h1> 
           <h3 className="pb-5">Dante Castelán Carpinteyro y Jeremy Hernández Balderas</h3> 
        </Container>
       </div>
       <Container className="pb-5 text-center">
        <h5 className="pt-5">
       Entusiasta de la programación, en este artículo te mostraremos cómo crear un repositorio de GitHub, para que puedas cargar tu código y usar el sistema de control de versiones de archivos Git en tus proyectos, así como las páginas de GitHub para ver en línea tus primeros despliegues. <br/> <br/>

        GitHub es una plataforma de desarrollo de código propiedad de Microsoft que te permite tener todo tu código en un sólo lugar, haciéndote la vida más sencila. Además, tiene un montón de integraciones, opciones de despliegue en servidores y métodos de autenticación para que crees así un excelente flujo de trabajo. <br/> <br/>

        Lo primero que debemos hacer es acceder a nuestra cuenta de GitHub previamente creada para tener acceso a las opciones en la esquina superior izquierda. Haremos un click en la opción "+", y se nos desplegará un menú, en el cual seleccionaremos "New repository".
         </h5>
         </Container>
         <Container className="pb-5 text-center">
        <div className="div1 text-center">
        <img className="img-fluid d-lg-flex justify-content-center align-self-center justify-content-lg-center align-items-lg-center img-article " src={img1}/>
         </div>
         </Container>
       
        <Container className="pb-5 text-center">
        <h5 className="pb-4">Posteriormente, escribimos el nombre de nuestro repositoro</h5>
        <div className="div1 text-center">
        <img className="img-fluid d-lg-flex justify-content-center align-self-center justify-content-lg-center align-items-lg-center img-article pb-5 " src={img2}/>
        </div>
        </Container>
       
        <Footer></Footer>
        </>
    )
}

export {Git}