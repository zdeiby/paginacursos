import React from "react";
import { Footer } from "../Componentes/Footer";
import { RegisterUI } from "./RegisterUI";
import { Nav } from "../Componentes/Nav/index";

function Register(){
    return(
        <React.Fragment>
        <Nav></Nav>
        <RegisterUI></RegisterUI>
        <Footer></Footer>
        </React.Fragment>
    )
}

export {Register}