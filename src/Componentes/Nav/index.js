import React from "react";
import { Link } from "react-router-dom";
import '../../assets/bootstrap/css/bootstrap.min.css'
import '../../assets/css/Carousel-Hero.css'
import '../../assets/css/extra.css'
import '../../assets/css/uiverse.css'
import { useAuth } from "../../Login/peticion";
import './Nav.css'


function Nav(){
    const [state, setState]= React.useState(true);
    const [show, setShow]= React.useState(true);
    const auth=useAuth();
    if(auth.user?.username){
        localStorage.setItem("correo",auth.user?.username) 
       
    }
    try{
      auth.user={username:localStorage.getItem("correo")}
    }catch{

    }
   
    const salir=() => auth.logout()

    function cerrarAbrir(){
        setState(!state)
        if(state===true){
            setShow('show')
        }
        if(state===false){
            setShow('')
        }
    }
    return(
        <React.Fragment>
        <nav className="navbar navbar-dark navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
        <div className="container"><Link to='/'className="navbar-brand d-flex align-items-center" href="/">
            <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon rueda-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-code-slash">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z">
                        </path>
                    </svg></span><span>Castelán Carpinteyro</span></Link>
                    <button onClick={cerrarAbrir} data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle
                    navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className={`collapse navbar-collapse ${show}`} id="navcol-1">
                <ul className="navbar-nav mx-auto">
                 <li className="nav-item">  <Link className="nav-link" to={'/'}> Inicio</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={'/aprende'}> Aprende a programar</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={'/'}> Servicios</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={'/'}> Productos</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={'/software'}> software</Link></li>
                 {(auth.user?.username )? " ": <li className="nav-item"><Link className="nav-link" to={'/register'}>Sign Up</Link></li> } 
                   
                </ul>
                {(auth.user?.username)? <h6 className="nav-item nav-link">{auth.user.username} <h7 onClick={salir} className='pointer text-center pt-2 text-success' > Salir</h7></h6> : <div className="div1-efecto"><Link  className="btn btn-primary shadow div2-efecto" role="button" to={'/login'}>Iniciar sesión</Link></div>}
            </div>
        </div>
    </nav>
    </React.Fragment>
    )
}

export {Nav}