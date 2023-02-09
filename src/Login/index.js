import React from "react";
import { Footer } from "../Componentes/Footer";
import { Nav } from "../Componentes/Nav/index";
import { LoginUI } from "./LoginUI";

function Login(){
    return(
        <React.Fragment>
        <Nav></Nav>
        <LoginUI></LoginUI>
         <Footer></Footer>
        </React.Fragment>
       
    )
}

export {Login}