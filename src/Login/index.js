import React from "react";
import { Footer } from "../Componentes/Footer/index.js";
import { Nav } from "../Componentes/Nav/index.js";
import { LoginUI } from "./LoginUI.js";

function Login(){
    return(
        <React.Fragment>
        <LoginUI></LoginUI>
        </React.Fragment>
       
    )
}

export {Login}