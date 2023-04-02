import React from "react";
import { Link } from "react-router-dom";
import '../../assets/bootstrap/css/bootstrap.min.css'
import '../../assets/css/Carousel-Hero.css'
import '../../assets/css/extra.css'
import '../../assets/css/uiverse.css'
import { useAuthr } from "../../Login/peticion";
import './Nav.css'
import profileImg from '../../assets/img/profileImages/308005691_464884012340731_7728597009113021700_n.jpg'


function Nav(){
    const [searchMenu, setSearchMenu] = React.useState(true);
    const [showMenues,setShowMenu] = React.useState('');
    const [state, setState]= React.useState(true);
    const [show, setShow]= React.useState(true);
    const [getCourses, setGetCourses]= React.useState("false");
    const [out, setOut]= React.useState('');
    const auth=useAuthr();
    
React.useEffect(()=>{
     async function leerCourses() {
                const response = await fetch('https://api.castelancarpinteyro.com/cursos', {
                  method: 'GET',
                });
                const data =  await response.json();
                try{
                    let a=data.body
                    setGetCourses(await data); 
                   
                  //  console.log(data)   
                }catch{
                    console.log('error')
                }
            
              
              }

              leerCourses()
},[out])
       
    if(auth.user?.name){
        let stringy = JSON.stringify({
            _id:auth.user._id,
            name:auth.user.name,
            lastName:auth.user.lastName,
            email:auth.user.email,
             }) 
            localStorage.setItem("date",stringy)
         if(getCourses !=='false'){
        let pushCO=getCourses.body.filter(index=> index._id==JSON.parse(localStorage.getItem("date"))._id)
            localStorage.setItem("cursos", JSON.stringify(pushCO))
          
    }
    }

    
    try{
      auth.user=JSON.parse(localStorage.getItem("date"))
    }catch{

    }
   
    const salir=() => {
      
        auth.logout()  
        setOut(new Date())
    }

    function cerrarAbrir(){
        setState(!state)
        if(state===true){
            setShow('show')
        }
        if(state===false){
            setShow('')
        }
    }

    
    function menu(){
        setSearchMenu(!searchMenu);
        if(searchMenu == true){
            setShowMenu('show')
           
        }
        if(searchMenu !== true){
            setShowMenu('')
        }
    }

    return(
        <React.Fragment>
        <nav className="navbar navbar-dark navbar-expand-md sticky-top navbar-shrink py-3 " id="mainNav">
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
              {/*  <li className="nav-item">  <Link className="nav-link" to={'/'}> Inicio</Link></li> */} 
                    <li className="nav-item" onClick={cerrarAbrir}><Link className="nav-link" to={'/aprende'}>Programación</Link></li>
                    <li className="nav-item" onClick={cerrarAbrir}><Link className="nav-link" to={'/'}> Servicios</Link></li>
                    <li className="nav-item" onClick={cerrarAbrir}><Link className="nav-link" to={'/'}> Productos</Link></li>
                    <li className="nav-item" onClick={cerrarAbrir}><Link className="nav-link" to={'/software'}> software</Link></li>
                {(auth.user?.name)? <li className="nav-item" onClick={cerrarAbrir}>  <Link className="nav-link" to={'/admin'}> Agrega Articulos</Link></li>:''}
                 {(auth.user?.name )? " ": <li className="nav-item" onClick={cerrarAbrir}><Link className="nav-link" to={'/register'}>Sign Up</Link></li> } 
                 {(auth.user?.name)? <li class="nav-item dropdown no-arrow"  onClick={menu}>
                            <div class="nav-item dropdown no-arrow">
                                <a class="dropdown-toggle nav-link show" aria-expanded="true" data-bs-toggle="dropdown" >
                                    <span class="d-none d-lg-inline me-2 text-gray-600 small">{auth.user.name}</span>
                                 <img onClick={menu}  class="border rounded-circle img-profile text-dark" src={profileImg}/></a>
                                <div class={`dropdown-menu shadow dropdown-menu-end animated--grow-in ${showMenues} bg-light`}>
                                <Link to='/perfil'>  <a class="dropdown-item"><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400 "></i>&nbsp;Profile</a></Link>
                                    <Link to='/profile/information'> <a class="dropdown-item" ><i class="fas fa-cogs fa-sm fa-fw me-2 "></i>&nbsp;Settings</a></Link>
                                    <a class="dropdown-item" ><i class="fas fa-list fa-sm fa-fw me-2 "></i>&nbsp;Activity log</a>
                                    <div class="dropdown-divider"></div><a class="dropdown-item"  onClick={salir} ><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 "></i >&nbsp;Logout</a>
                                </div>
                            </div>
                        </li>:<div className="div1-efecto"><Link  className="btn btn-primary shadow div2-efecto" role="button" to={'/login'}>Iniciar sesión</Link></div>}
                </ul>

            </div>
        </div>
    </nav>
    </React.Fragment>
    )
}

export {Nav}