import React from "react";
import { Footer } from "../Componentes/Footer/index.js";
import { Nav } from "../Componentes/Nav/index.js";
import { LoginUI } from "./LoginUI.js";

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