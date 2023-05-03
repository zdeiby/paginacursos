import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { CardFoto } from '../Componentes/CardFoto';
import { useParams, Link } from 'react-router-dom';


function Servicios(){
    const {slug} = useParams();
    console.log('hola soy un slug',slug)
    return( 
        <>

       <Container className='pt-4 pb-4 p-4 text-center'>
        <CardFoto  title='Tutorias en React,JS,PHP' text='Pide a nuestro grupo de trabajo algun proyecto o solucion de algun ejercicio, profesores en vivo para resolver tus dudas' url='tutorias' foto='https://echeverriallanos.cl/echeverriallanos/wp-content/uploads/2018/09/servicios.png'></CardFoto>
        <CardFoto title='Diseño de paginas WEB' text='Nuestro grupo de trabajo puede asesorarte o crear la pagina web para tu negocio, da click en solicitar y cuentanos en que podemos servirte' url='Creacion-paginas-web' foto='https://echeverriallanos.cl/echeverriallanos/wp-content/uploads/2018/09/servicios.png'></CardFoto>
        <CardFoto title='Tutorias en general' text='Pide a nuestro grupo de trabajo algun proyecto o solucion de algun ejercicio, profesores en vivo para resolver tus dudas' url='dudas' foto='https://echeverriallanos.cl/echeverriallanos/wp-content/uploads/2018/09/servicios.png'></CardFoto>
 
       </Container>

      
   
        </>
    )
}

export {Servicios}