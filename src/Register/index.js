import React from "react";
import { Footer } from "../Componentes/Footer/index.js";
import { RegisterUI } from "./RegisterUI.js";
import { Nav } from "../Componentes/Nav/index.js";

function Register(){
    return(
        <React.Fragment>
        <RegisterUI></RegisterUI>
    
        </React.Fragment>
    )
}

export {Register}