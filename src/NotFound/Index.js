import React from "react";
import { Footer } from "../Componentes/Footer";
import { Nav } from "../Componentes/Nav";
import imgError from "../assets/img/NotFound/NotFound.jpg"
import './NotFound.css'
import { Container } from "react-bootstrap";

function NotFound(){
    return(
        <>
        <Nav></Nav>
            <img className="img404"src={imgError}/>
        <Footer></Footer>
        </>
    )
}

export {NotFound}