import React from 'react'
import { Form } from '../Componentes/Form'
import { useParams, Link } from 'react-router-dom';

function FormServices(){
    const {slug} = useParams();
    console.log("hola soy un slug", slug)

    return(
        <>
           <Form title={slug}></Form>
    </>
 
    
    )
}

export {FormServices}