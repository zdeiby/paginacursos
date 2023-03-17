import React from "react";
import { Nav } from "../Componentes/Nav";
import { Footer } from "../Componentes/Footer";
import { Container } from "react-bootstrap";

function Software(){
    return(
        < >
        <div className="bg-dark">
        <Container className="text-center pt-5"> 
           <h3 className="text-success"> Carpeta de programas</h3>
           <h1> Software</h1> 
           <h3 className="pb-5">Descargas disponibles</h3> 
        </Container>
       
       <Container className="pb-5">
           ¿Qué tal? Soy Dante Castelán Carpinteyro; y en este sitio web podrás tener acceso gratuito a una amplia gama de programas y software tanto para ser más productivo en la computadora; como para comenzar en programación o divertirte jugando.<br/><br/>

            El software que aquí se encuentra está alojado en un servidor de OneDrive, por lo que es posible que el link caduque y no te permita acceder; en ese caso; contáctame por cualquiera de las vías disponibles en la parte inferior de esta página web para que lo genere nuevamente y funcione.<br/><br/>

            Cabe aclarar, que no todo es legítimo, y es el resultado de una colección de varios años, por lo que deberías ser cauteloso. Si conoces a alguien que necesite algún programa, apoya a Castelán Carpinteyro en la distribución de este link. ¡Compartir y enseñar es aprender y reforzar lo aprendido!<br/><br/>

           <a href="https://cecytepuebla-my.sharepoint.com/personal/d_castelanc_chg_2023_cecytepuebla_edu_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fd%5Fcastelanc%5Fchg%5F2023%5Fcecytepuebla%5Fedu%5Fmx%2FDocuments%2FPROGRAMAS%20PC%27S%20AVANZADOS%2004%2D03%2D2022&ga=1">Da click aquí</a>  para ir a la carpeta de software.

            Recuerda que puedes contribuir con una <a href="https://www.paypal.com/paypalme/CastelanCarpinteyroD">donación en PayPal</a>; así podremos buscar más software y ponerlo disponible para la comunidad 🤓😎😉.
       </Container>
        </div>
     
        </>
    )
}

export {Software}