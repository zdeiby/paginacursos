import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ColorCard } from "../Componentes/ColorCard";
import { Login } from "../Login";


function Cursos(){
    const [name, setName]= React.useState([])
    const navigate = useNavigate()
    let cursos;
    let  nameCourses=['lalala']
    let cursos2;
    let  nameCourses2=['lalala']
    try{
        cursos=JSON.parse(localStorage.getItem("cursos"))
        nameCourses=cursos.map(index => index.name)
        cursos2=JSON.parse(localStorage.getItem("cursos2"))
        nameCourses2=cursos.map(index => index.name)
        console.log(nameCourses2)
   
    }catch{
        console.log("hola")
    }
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
                   <ColorCard nombre={(nameCourses && nameCourses.includes('JavaScript'))?'Continua con el curso':'Añade Curso'} color='primary' name='JavaScript' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente' ></ColorCard>
                    <ColorCard nombre={(nameCourses && nameCourses.includes('HTML'))?'Continua con el curso':'Añade Curso'}  color='secondary' name='HTML' text='Crea el maquetado de tu web; aprende sobre metadatos, sé experto en SEO, y construye la base de una página' ></ColorCard>
                    <ColorCard nombre={(nameCourses && nameCourses.includes('CSS'))?'Continua con el curso':'Añade Curso'}  color='info' name='CSS' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad' ></ColorCard>
                    <ColorCard nombre={(nameCourses && nameCourses.includes('Bootstrap'))?'Continua con el curso':'Añade Curso'}  color='primary' name='Bootstrap' text='Dale estilo a tu DOM con hojas de estilo en cascada, usa frameworks como Bootstrap, y deja volar tu creatividad' ></ColorCard>
                   {/*   <ColorCard color='primary' name='React' text='Prepárate para hacer de tu web un sitio dinámico y con funcionalidades del lado del cliente'></ColorCard>
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
    */}
                </div>
                </div>
                </div>
        </section>
            </Container>
        </div>
   
        </>: <Login/>}
        </>
    )
}

export {Cursos}


