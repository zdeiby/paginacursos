import React from "react";
import { Col  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthr } from "../Login/peticion";
import './Register.css'
import {leer, postear} from '../dataBases/db'


function RegisterUI(){
    const auth= useAuthr();
    const [get, setGet]= React.useState("false");
    const [info, setInfo]= React.useState('');
    const [noSame, setNoSame]=React.useState(false);
    const [pass, setPass]=React.useState(false);
    
    React.useEffect(()=> {
        async function leerUsers() {
            setGet(await leer("users"));
      }
      leerUsers()
    },[])

   
function sendData(e){
    let succes;
    e.preventDefault();
    if(info.password.length >= 8){
      
    
    if(get !=="false"){
        for(let i=0; i<get.body.length; i++){ 
        if(get?.body[i].email === info.email || (!info.lastName || !info.email || !info.password) ){
            succes=false;
            setNoSame(true)
           return
            } else{
               succes=true
            
            }
           
    }

 if(succes ===true){
postear(info, 'users');
let username=info.name;
let password=info.password;
auth.login({username, password},1) 
 }
    }
   }
   else{
    setPass(true);
   } 
}


function form(e){
    setNoSame(false)
    setPass(false)
    setInfo({
        ...info,
        [e.target.name]:e.target.value,
        })
}

    return(
        <React.Fragment>
           <section className="py-3">
        <div className="container ">
            <div className="row mb-4 mb-lg-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p className="fw-bold text-success mb-2">sign up</p>
                    <h2 className="fw-bold">Register</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center d-flex flex-column align-items-center">
                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        <div className="container mb-4 input" >
            <form onSubmit={sendData}>
            {pass? <p className="fw-bold text-success text-center">La contraseña debe ser minimo de 8 caracteres</p>:''} 
            {noSame? <p className="fw-bold text-success text-center">El correo ya se encuentra registrado, inicia sessión</p>:''} 
                    <div  className="d-flex flex-column justify-content-between align-items-center flex-lg-row " > 
                            <Col >
                                 <div className="mb-3"><input required onChange={form} className="form-control" type="text" name="name" placeholder="Name"/></div>
                                 <div className=""><input required onChange={form} className="form-control" type="text" name="lastName" placeholder="Last name"/></div>
                                </Col>
                                <Col className="text-center  ">     
                                <div className="mb-3"><input required onChange={form} className="form-control" type="text" name="email" placeholder="Email"/></div>
                                <div className=""><input required  onChange={form} className="form-control" type="password" name="password" placeholder="Password"/></div>
                                </Col>
                    </div>
                     
                         <div className="mb-3 pt-4 divBoton " ><button className="btn btn-primary shadow d-block boton" type="submit">Sign up</button></div>
                         <p className="text-muted divBoton ">Already have an account?&nbsp;<Link to='../login'>Log in</Link></p>
             </form>
             </div>
           
        
   
    </React.Fragment>
    )
}

export {RegisterUI}