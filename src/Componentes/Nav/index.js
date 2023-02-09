import React from "react";
import { Link } from "react-router-dom";
import '../../assets/bootstrap/css/bootstrap.min.css'
import '../../assets/css/Carousel-Hero.css'
import '../../assets/css/extra.css'
import '../../assets/css/uiverse.css'


function Nav(){
    const [state, setState]= React.useState(true);
    const [show, setShow]= React.useState(true);

    function cerrarAbrir(){
        setState(!state)
        if(state==true){
            setShow('show')
        }
        if(state==false){
            setShow('')
        }
    }
    return(
        <React.Fragment>
        <nav className="navbar navbar-dark navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="/">
            <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon rueda-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-code-slash">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z">
                        </path>
                    </svg></span><span>Castelán Carpinteyro</span></a>
                    <button onClick={cerrarAbrir} data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle
                    navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className={`collapse navbar-collapse ${show}`} id="navcol-1">
                <ul className="navbar-nav mx-auto">
                 <li className="nav-item">  <Link to={'/'}> <a className="nav-link" href="index.php">Inicio</a></Link></li>
                    <li className="nav-item"><a className="nav-link" href="#">Aprende a programar</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
                    <li className="nav-item"><Link to={'/register'}><a className="nav-link" href="#">Sign Up</a></Link></li>
                </ul>
                <div className="div1-efecto"><Link to={'/login'}><a className="btn btn-primary shadow div2-efecto" role="button">Iniciar sesión</a></Link></div>
            </div>
        </div>
    </nav>
    </React.Fragment>
    )
}

export {Nav}