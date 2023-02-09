import React from "react";
import './AprendeContainer.css'
import { Cards } from "./Cards/index.js";
import { Cards2 } from "./Cards2/index.js";

function AprendeContainer(){

    let DB="M448 80V128C448 172.2 347.7 208 224 208C100.3 208 0 172.2 0 128V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80zM393.2 214.7C413.1 207.3 433.1 197.8 448 186.1V288C448 332.2 347.7 368 224 368C100.3 368 0 332.2 0 288V186.1C14.93 197.8 34.02 207.3 54.85 214.7C99.66 230.7 159.5 240 224 240C288.5 240 348.3 230.7 393.2 214.7V214.7zM54.85 374.7C99.66 390.7 159.5 400 224 400C288.5 400 348.3 390.7 393.2 374.7C413.1 367.3 433.1 357.8 448 346.1V432C448 476.2 347.7 512 224 512C100.3 512 0 476.2 0 432V346.1C14.93 357.8 34.02 367.3 54.85 374.7z"
    let HT="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"
    let Servidores="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z"
    let correo="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"

    
    return(
        <React.Fragment>
        <section>
       
        <div className="container bg-dark py-5">
            <div className="row">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p className="fw-bold text-success mb-2">Aprende</p>
                    <h3 className="fw-bold">Visita nuestras secciones destacadas</h3>

                </div>  
            </div>
        
   
            <div className="py-5 p-lg-5">
                <div className="row row-cols-1 row-cols-md-2 mx-auto estilo" >

                    <Cards patch={DB} text='Diseña, crea, y administra bases de datos para conectarlas a tu sitio.' title='Bases de datos'></Cards>
                    <Cards2 patch={HT} text='Crea el DOM de tus páginas web con etiquetas de HTML5 de forma profesional.' title='Maquetado HTML'></Cards2>
                    <Cards patch={Servidores} text='Aquí habrá guías para la administración de servidores; basado en Plesk Obsidian en Ubuntu.' title='Servidores'></Cards>
                    <Cards2 patch={correo}text='Integra envíos automáticos y manuales de correos electrónicos en tus páginas y en tu servidor. Configura el webmail.' title='Correo electrónico'> </Cards2>

                 </div>
             </div> 
        </div>
 </section>
    </React.Fragment>
    )
}
export {AprendeContainer}